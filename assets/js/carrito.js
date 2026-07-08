/**
 * CEFIRO_SOFT - Carrito de compras con soporte de variantes
 * Clave única por item: variante_id (permite 50ml y 100ml del mismo perfume)
 */

class CarritoCompras {
    constructor() {
        this.clave           = 'cefiro_carrito';
        this.telefonoEmpresa = '+57 321 3320564';
        this.cargarCarrito();
    }

    cargarCarrito() {
        const json = localStorage.getItem(this.clave);
        this.items = json ? JSON.parse(json) : [];
    }

    guardarCarrito() {
        localStorage.setItem(this.clave, JSON.stringify(this.items));
        this.actualizarUI();
    }

    /**
     * Agrega o incrementa una variante en el carrito.
     * @param {Object} producto - { id, nombre, familia_olfativa, ... }
     * @param {Object} variante - { id, ml, botella, precio, disponibilidad }
     */
    agregarVariante(producto, variante) {
        const maxStock = variante.stock ?? Infinity;
        const existente = this.items.find(i => i.variante_id === variante.id);
        if (existente) {
            if (existente.cantidad >= maxStock) {
                this.mostrarNotificacion(`⚠️ Stock máximo: ${maxStock} unidad${maxStock !== 1 ? 'es' : ''}`);
                return;
            }
            existente.cantidad += 1;
        } else {
            this.items.push({
                variante_id:    variante.id,
                producto_id:    producto.id,
                nombre:         producto.nombre,
                variante_label: `${variante.ml}ml ${variante.presentacion || ''}`.trim(),
                precio:         variante.precio,
                disponibilidad: variante.disponibilidad,
                stock:          maxStock,
                familia:        producto.familia_olfativa || '',
                cantidad:       1,
            });
        }
        this.guardarCarrito();
        this.mostrarNotificacion(`✅ ${producto.nombre} ${variante.ml}ml añadido`);
    }

    eliminarItem(variante_id) {
        this.items = this.items.filter(i => i.variante_id !== variante_id);
        this.guardarCarrito();
    }

    actualizarCantidad(variante_id, cantidad) {
        cantidad = parseInt(cantidad, 10);
        const item = this.items.find(i => i.variante_id === variante_id);
        if (!item) return;
        if (cantidad <= 0) {
            this.eliminarItem(variante_id);
        } else {
            const maxStock = item.stock ?? Infinity;
            item.cantidad = Math.min(cantidad, maxStock);
            if (cantidad > maxStock) {
                this.mostrarNotificacion(`⚠️ Stock máximo: ${maxStock} unidad${maxStock !== 1 ? 'es' : ''}`);
            }
            this.guardarCarrito();
        }
    }

    obtenerTotal() {
        return this.items.reduce((s, i) => s + i.precio * i.cantidad, 0);
    }

    obtenerCantidadTotal() {
        return this.items.reduce((s, i) => s + i.cantidad, 0);
    }

    vaciarCarrito() {
        this.items = [];
        this.guardarCarrito();
    }

    construirPayload(nombre, telefono) {
        return {
            cliente_nombre:   nombre,
            cliente_telefono: telefono,
            items: this.items.map(i => ({
                producto_id: i.producto_id,
                variante_id: i.variante_id,
                precio:      i.precio,
                cantidad:    i.cantidad,
            })),
        };
    }

    construirMensajeWhatsApp(nombre, telefono, numeroOrden) {
        let msg = `*🌹 Pedido #${numeroOrden} - Céfiro Parfums*\n\nHola ${nombre},\n\n*Artículos:*\n`;
        this.items.forEach(i => {
            msg += `• ${i.cantidad}x ${i.nombre} — ${i.variante_label}\n`;
            msg += `  💰 $${(i.precio * i.cantidad).toLocaleString('es-CO')}\n\n`;
        });
        msg += `*Total: $${this.obtenerTotal().toLocaleString('es-CO')}*\n\n`;
        msg += `✨ Gracias por tu interés.\n📞 ${telefono}`;
        return msg;
    }

    enviarAWhatsApp(nombre, telefono, numeroOrden) {
        const url = `https://wa.me/${this.telefonoEmpresa.replace(/\D/g,'')}?text=${encodeURIComponent(this.construirMensajeWhatsApp(nombre, telefono, numeroOrden))}`;
        window.open(url, '_blank');
    }

    actualizarUI() {
        this.actualizarIconoCarrito();
        this.actualizarListaCarrito();
    }

    actualizarIconoCarrito() {
        const el = document.getElementById('icono-cantidad-carrito');
        const n  = this.obtenerCantidadTotal();
        if (el) {
            el.textContent   = n > 0 ? n : '';
            el.style.display = n > 0 ? 'flex' : 'none';
        }
    }

    actualizarListaCarrito() {
        const contenedor = document.getElementById('lista-carrito');
        if (!contenedor) return;

        if (this.items.length === 0) {
            contenedor.innerHTML = '<p style="padding:40px 20px;text-align:center;color:#6b6555;">Tu carrito está vacío</p>';
            this.actualizarResumen();
            return;
        }

        contenedor.innerHTML = this.items.map(item => `
            <div class="carrito-item">
                <div class="carrito-item-info">
                    <div class="carrito-item-nombre">${item.nombre}</div>
                    <div class="carrito-item-familia">${item.variante_label}${item.familia ? ' · ' + item.familia : ''}</div>
                    <div class="carrito-item-precio">$${item.precio.toLocaleString('es-CO')}</div>
                    ${item.disponibilidad === 'fabricable'
                        ? '<div class="carrito-badge-fab" style="font-size:10px;color:#C8D0DA;margin-top:2px;">🔧 Por pedido</div>'
                        : ''}
                </div>
                <div class="carrito-item-cantidad">
                    <button onclick="carrito.actualizarCantidad(${item.variante_id}, ${item.cantidad - 1})" class="btn-cantidad">−</button>
                    <input type="number" value="${item.cantidad}" min="1" max="${item.stock ?? ''}"
                           onchange="carrito.actualizarCantidad(${item.variante_id}, this.value)">
                    <button onclick="carrito.actualizarCantidad(${item.variante_id}, ${item.cantidad + 1})" class="btn-cantidad">+</button>
                </div>
                <div class="carrito-item-subtotal">$${(item.precio * item.cantidad).toLocaleString('es-CO')}</div>
                <button onclick="carrito.eliminarItem(${item.variante_id})" class="btn-eliminar">✕</button>
            </div>
        `).join('');

        this.actualizarResumen();
    }

    actualizarResumen() {
        const resumen = document.getElementById('carrito-resumen');
        if (!resumen) return;
        const total = this.obtenerTotal();
        resumen.innerHTML = `
            <div class="carrito-resumen-fila"><span>Subtotal:</span><span>$${total.toLocaleString('es-CO')}</span></div>
            <div class="carrito-resumen-fila"><span>Envío:</span><span>Consultar</span></div>
            <div class="carrito-resumen-total"><span>Total:</span><span>$${total.toLocaleString('es-CO')}</span></div>
        `;
    }

    mostrarNotificacion(mensaje) {
        const n = document.createElement('div');
        n.className   = 'notificacion-carrito';
        n.textContent = mensaje;
        document.body.appendChild(n);
        setTimeout(() => n.classList.add('visible'), 10);
        setTimeout(() => { n.classList.remove('visible'); setTimeout(() => n.remove(), 300); }, 2000);
    }
}

const carrito = new CarritoCompras();
document.addEventListener('DOMContentLoaded', () => carrito.actualizarUI());
