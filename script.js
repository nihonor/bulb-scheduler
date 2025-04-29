const ws = new WebSocket('ws://localhost:8765');
const form = document.getElementById('schedule-form');
const statusElement = document.getElementById('status');
const statusIndicator = document.getElementById('status-indicator');
const currentScheduleElement = document.getElementById('current-schedule');

// Connection status handling
ws.onopen = () => {
    statusElement.textContent = 'Connected';
    statusIndicator.className = 'status-indicator connected';
};

ws.onclose = () => {
    statusElement.textContent = 'Disconnected';
    statusIndicator.className = 'status-indicator disconnected';
};

ws.onerror = (error) => {
    statusElement.textContent = 'Connection Error';
    statusIndicator.className = 'status-indicator disconnected';
    console.error('WebSocket error:', error);
};

ws.onmessage = (event) => {
    const message = event.data;
    currentScheduleElement.textContent = message;
    
    // Add a temporary success animation
    currentScheduleElement.classList.add('success-animation');
    setTimeout(() => {
        currentScheduleElement.classList.remove('success-animation');
    }, 2000);
};

form.addEventListener('submit', (e) => {
    e.preventDefault();
    
    const onTime = document.getElementById('on-time').value;
    const offTime = document.getElementById('off-time').value;
    
    if (ws.readyState === WebSocket.OPEN) {
        const data = {
            onTime: onTime,
            offTime: offTime
        };
        
        ws.send(JSON.stringify(data));
        
        // Add loading state to button
        const submitBtn = form.querySelector('button');
        const originalText = submitBtn.innerHTML;
        submitBtn.innerHTML = '<i class="fas fa-spinner fa-spin"></i> Setting Schedule...';
        submitBtn.disabled = true;
        
        // Reset button after 2 seconds
        setTimeout(() => {
            submitBtn.innerHTML = originalText;
            submitBtn.disabled = false;
        }, 2000);
    } else {
        statusElement.textContent = 'Not Connected - Please refresh the page';
        statusIndicator.className = 'status-indicator disconnected';
    }
});