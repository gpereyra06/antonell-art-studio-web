"use client";

import { useState } from 'react';
import { motion } from 'framer-motion';

const ContactForm = () => {
  const [formData, setFormData] = useState({
    nombre: '',
    email: '',
    telefono: '',
    mensaje: ''
  });

  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const isFormValid = formData.nombre && formData.email && formData.mensaje;

  const handleEmailSubmit = async (e) => {
    e.preventDefault();
    if (!isFormValid) return;
    
    setIsSubmitting(true);
    
    // TODO: Implementar envío por email (EmailJS/Resend)
    console.log('Enviando por email:', formData);
    
    setTimeout(() => {
      setIsSubmitting(false);
      alert('¡Mensaje enviado! Te responderemos pronto.');
      setFormData({ nombre: '', email: '', telefono: '', mensaje: '' });
    }, 1500);
  };

  const handleWhatsAppRedirect = () => {
    if (!isFormValid) return;
    
    const mensaje = `Hola! Mi nombre es ${formData.nombre}.

${formData.mensaje}

Email: ${formData.email}${formData.telefono ? `\nTeléfono: ${formData.telefono}` : ''}

¡Gracias!`;

    const whatsappUrl = `https://wa.me/59895815939?text=${encodeURIComponent(mensaje)}`;
    window.open(whatsappUrl, '_blank');
  };

  return (
    <motion.div
      className="w-full"
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      viewport={{ once: true }}
    >
      <form onSubmit={handleEmailSubmit} className="space-y-8">
        {/* Nombre */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          viewport={{ once: true }}
        >
          <label htmlFor="nombre" className="block text-lg font-medium" style={{ color: 'var(--text-light)', marginBottom: '0.5rem' }}>
            Nombre *
          </label>
          <input
            type="text"
            id="nombre"
            name="nombre"
            value={formData.nombre}
            onChange={handleInputChange}
            required
            className="w-full px-4 py-3 rounded-lg border-2 transition-all duration-300 text-lg"
            style={{
              backgroundColor: 'rgba(255, 255, 255, 0.1)',
              borderColor: 'var(--border)',
              color: 'var(--text-light)',
              backdropFilter: 'blur(10px)',
              marginBottom: '0.5rem'
            }}
            onFocus={(e) => {
              e.target.style.borderColor = 'var(--accent)';
              e.target.style.boxShadow = '0 0 0 3px rgba(78, 205, 196, 0.1)';
            }}
            onBlur={(e) => {
              e.target.style.borderColor = 'var(--border)';
              e.target.style.boxShadow = 'none';
            }}
            placeholder="Tu nombre completo"
          />
        </motion.div>

        {/* Email */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true }}
        >
          <label htmlFor="email" className="block text-lg font-medium" style={{ color: 'var(--text-light)', marginTop: '0.5rem', marginBottom: '0.5rem' }}>
            Email *
          </label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleInputChange}
            required
            className="w-full px-4 py-3 rounded-lg border-2 transition-all duration-300 text-lg"
            style={{
              backgroundColor: 'rgba(255, 255, 255, 0.1)',
              borderColor: 'var(--border)',
              color: 'var(--text-light)',
              backdropFilter: 'blur(10px)',
              marginBottom: '0.5rem'
            }}
            onFocus={(e) => {
              e.target.style.borderColor = 'var(--accent)';
              e.target.style.boxShadow = '0 0 0 3px rgba(78, 205, 196, 0.1)';
            }}
            onBlur={(e) => {
              e.target.style.borderColor = 'var(--border)';
              e.target.style.boxShadow = 'none';
            }}
            placeholder="tu@email.com"
          />
        </motion.div>

        {/* Teléfono */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          viewport={{ once: true }}
        >
          <label htmlFor="telefono" className="block text-lg font-medium" style={{ color: 'var(--text-light)', marginTop: '0.5rem', marginBottom: '0.5rem' }}>
            Teléfono <span style={{ color: 'var(--accent)' }}>(opcional)</span>
          </label>
          <input
            type="tel"
            id="telefono"
            name="telefono"
            value={formData.telefono}
            onChange={handleInputChange}
            className="w-full px-4 py-3 rounded-lg border-2 transition-all duration-300 text-lg"
            style={{
              backgroundColor: 'rgba(255, 255, 255, 0.1)',
              borderColor: 'var(--border)',
              color: 'var(--text-light)',
              backdropFilter: 'blur(10px)',
              marginBottom: '0.5rem'
            }}
            onFocus={(e) => {
              e.target.style.borderColor = 'var(--accent)';
              e.target.style.boxShadow = '0 0 0 3px rgba(78, 205, 196, 0.1)';
            }}
            onBlur={(e) => {
              e.target.style.borderColor = 'var(--border)';
              e.target.style.boxShadow = 'none';
            }}
            placeholder="+598 95 815 939"
          />
        </motion.div>

        {/* Mensaje */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          viewport={{ once: true }}
        >
          <label htmlFor="mensaje" className="block text-lg font-medium" style={{ color: 'var(--text-light)', marginTop: '0.5rem', marginBottom: '0.5rem' }}>
            Mensaje *
          </label>
          <textarea
            id="mensaje"
            name="mensaje"
            value={formData.mensaje}
            onChange={handleInputChange}
            required
            rows="5"
            className="w-full px-4 py-3 rounded-lg border-2 transition-all duration-300 text-lg resize-vertical"
            style={{
              backgroundColor: 'rgba(255, 255, 255, 0.1)',
              borderColor: 'var(--border)',
              color: 'var(--text-light)',
              backdropFilter: 'blur(10px)'
            }}
            onFocus={(e) => {
              e.target.style.borderColor = 'var(--accent)';
              e.target.style.boxShadow = '0 0 0 3px rgba(78, 205, 196, 0.1)';
            }}
            onBlur={(e) => {
              e.target.style.borderColor = 'var(--border)';
              e.target.style.boxShadow = 'none';
            }}
            placeholder="Cuéntame sobre tu proyecto, ideas, presupuesto o cualquier consulta que tengas..."
          />
        </motion.div>

        {/* Botones */}
        <motion.div
          className="flex flex-col sm:flex-row gap-4"
          style={{ paddingTop: '1.5rem' }}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.5 }}
          viewport={{ once: true }}
        >
          {/* Botón Email */}
          <motion.button
            type="submit"
            disabled={!isFormValid || isSubmitting}
            className="flex-1 py-4 px-6 rounded-lg font-semibold text-lg transition-all duration-300 flex items-center justify-center gap-3"
            style={{
              backgroundColor: isFormValid ? 'var(--primary)' : 'var(--gray-600)',
              color: 'var(--text-light)',
              opacity: isFormValid ? 1 : 0.6,
              cursor: isFormValid ? 'pointer' : 'not-allowed'
            }}
            whileHover={isFormValid ? { scale: 1.02, y: -2 } : {}}
            whileTap={isFormValid ? { scale: 0.98 } : {}}
          >
            {isSubmitting ? (
              <>
                <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin" />
                Enviando...
              </>
            ) : (
              <>
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
                Enviar por Email
              </>
            )}
          </motion.button>

          {/* Botón WhatsApp */}
          <motion.button
            type="button"
            onClick={handleWhatsAppRedirect}
            disabled={!isFormValid}
            className="flex-1 py-4 px-6 rounded-lg font-semibold text-lg transition-all duration-300 flex items-center justify-center gap-3"
            style={{
              backgroundColor: isFormValid ? 'var(--accent)' : 'var(--gray-600)',
              color: isFormValid ? 'var(--bg-dark)' : 'var(--text-light)',
              opacity: isFormValid ? 1 : 0.6,
              cursor: isFormValid ? 'pointer' : 'not-allowed'
            }}
            whileHover={isFormValid ? { scale: 1.02, y: -2 } : {}}
            whileTap={isFormValid ? { scale: 0.98 } : {}}
          >
            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
              <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893A11.821 11.821 0 0020.885 3.488"/>
            </svg>
            Continuar por WhatsApp
          </motion.button>
        </motion.div>

        {/* Nota informativa */}
        <motion.p
          className="text-center text-base"
          style={{ 
            color: 'var(--text-light)', 
            opacity: 0.8,
            marginTop: '1.5rem'
          }}
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 0.8 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          viewport={{ once: true }}
        >
          Te responderemos en menos de 24 horas
        </motion.p>
      </form>
    </motion.div>
  );
};

export default ContactForm;