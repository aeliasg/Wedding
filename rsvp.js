const RSVP_ENDPOINT = ''; // TODO: set your endpoint URL (Formspree/Supabase/Apps Script)

const form = document.querySelector('#rsvp-form');
const formMessage = document.querySelector('#form-message');

const setMessage = (message, isError = false) => {
  if (!formMessage) {
    return;
  }

  formMessage.textContent = message;
  formMessage.classList.toggle('error', isError);
};

const saveLocalCopy = (payload) => {
  const existing = JSON.parse(localStorage.getItem('rsvp_submissions') || '[]');
  existing.push({ ...payload, createdAt: new Date().toISOString() });
  localStorage.setItem('rsvp_submissions', JSON.stringify(existing));
};

if (form) {
  form.addEventListener('submit', async (event) => {
    event.preventDefault();

    const formData = new FormData(form);
    const payload = {
      name: String(formData.get('name') || '').trim(),
      attending: String(formData.get('attending') || ''),
      guests: Number(formData.get('guests') || 1),
      notes: String(formData.get('notes') || '').trim(),
    };

    if (!payload.name || !payload.attending) {
      setMessage('Por favor completa nombre y selección de asistencia.', true);
      return;
    }

    try {
      if (!RSVP_ENDPOINT) {
        saveLocalCopy(payload);
        setMessage('RSVP guardado localmente. Configura RSVP_ENDPOINT para recibir respuestas en línea.');
        form.reset();
        return;
      }

      const response = await fetch(RSVP_ENDPOINT, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(payload),
      });

      if (!response.ok) {
        throw new Error('No se pudo enviar el RSVP.');
      }

      setMessage('¡Gracias! Tu RSVP fue enviado correctamente.');
      form.reset();
    } catch (error) {
      setMessage('Hubo un problema enviando el formulario. Inténtalo otra vez.', true);
      console.error(error);
    }
  });
}
