async function sendMessage() {
  const input = document.getElementById("userInput");
  const chatOutput = document.getElementById("chatOutput");
  const userMsg = input.value.trim();
  if (!userMsg) return;

  chatOutput.innerHTML += `<div><strong>You:</strong> ${userMsg}</div>`;
  input.value = "";

  const res = await fetch("/api/chat", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ message: userMsg })
  });

  const data = await res.json();
  chatOutput.innerHTML += `<div><strong>AI:</strong> ${data.reply}</div>`;
}