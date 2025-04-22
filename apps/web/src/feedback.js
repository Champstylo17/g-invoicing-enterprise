export function initFeedback() {
  // Create Feedback Button
  const button = document.createElement('button');
  button.textContent = '💬 Feedback';
  button.style.position = 'fixed';
  button.style.bottom = '20px';
  button.style.right = '20px';
  button.style.padding = '12px 20px';
  button.style.backgroundColor = '#3b82f6';
  button.style.color = 'white';
  button.style.border = 'none';
  button.style.borderRadius = '8px';
  button.style.cursor = 'pointer';
  button.style.zIndex = '9999';

  button.onclick = () => {
    showFeedbackModal();
  };

  document.body.appendChild(button);
}

// Display Modal
function showFeedbackModal() {
  const modal = document.createElement('div');
  modal.style.position = 'fixed';
  modal.style.top = '50%';
  modal.style.left = '50%';
  modal.style.transform = 'translate(-50%, -50%)';
  modal.style.background = 'white';
  modal.style.padding = '24px';
  modal.style.boxShadow = '0 0 20px rgba(0,0,0,0.2)';
  modal.style.zIndex = '10000';
  modal.style.borderRadius = '10px';
  modal.innerHTML = `
    <h2 style="margin-bottom: 1rem;">Submit Feedback</h2>
    <input type="text" id="feedback-name" placeholder="Your Name" style="width: 100%; padding: 10px; margin-bottom: 10px;" />
    <textarea id="feedback-message" placeholder="Your feedback..." rows="4" style="width: 100%; padding: 10px;"></textarea>
    <div style="margin-top: 12px; display: flex; justify-content: space-between;">
      <button id="submit-feedback" style="background-color: #22c55e; color: white; border: none; padding: 10px 20px; border-radius: 6px; cursor: pointer;">Submit</button>
      <button id="close-feedback" style="background-color: #ef4444; color: white; border: none; padding: 10px 20px; border-radius: 6px; cursor: pointer;">Cancel</button>
    </div>
  `;

  document.body.appendChild(modal);

  document.getElementById('submit-feedback').onclick = () => {
    const name = document.getElementById('feedback-name').value;
    const message = document.getElementById('feedback-message').value;

    console.log("📬 Feedback Submitted:", { name, message });

    alert('✅ Thank you for your feedback!');
    document.body.removeChild(modal);
  };

  document.getElementById('close-feedback').onclick = () => {
    document.body.removeChild(modal);
  };
}
