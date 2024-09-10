if (self !== top) {
  const message = document.createElement('div');
  message.innerText = `${window.location.hostname} cannot be viewed in an iframe. Please open the page in a new tab by clicking the button below. Please `;

  const button = document.createElement('a');
  button.innerText = 'open page in a new tab';
  button.href = window.location.href;
  button.target = '_blank';

  message.appendChild(button);

  // Apply CSS styles to the message and button
  message.style.cssText = `
    color: lime;
    font-size: calc(1em + 1vw);
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    text-align: center;
    padding: 20px;
    max-width: 100%;
    max-height: 100%;
    background: black;
  `;

  button.style.cssText = `
    color: cyan;
    text-decoration: underline;
  `;

  // Wait for 1 second before clearing the page content
  setTimeout(() => {
    // Remove all child nodes from the body
    while (document.body.firstChild) {
      document.body.removeChild(document.body.firstChild);
    }

    // Add the message to the body
    document.body.appendChild(message);

    // Prevent scrolling
    document.body.style.overflow = 'hidden';
  }, 1000);
}
