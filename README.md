# Bulb Scheduler

A web-based application that allows you to schedule your smart bulb to turn on and off at specific times using MQTT protocol.

## Features

- Web-based interface for easy scheduling
- Real-time MQTT communication
- 24-hour time format support
- Automatic schedule checking every 30 seconds

## Prerequisites

- Python 3.7 or higher
- pip (Python package manager)
- Web browser (Chrome, Firefox, or Edge recommended)

## Installation

1. Clone the repository:

```bash
git clone https://github.com/nihonor/bulb-scheduler.git
cd bulb-scheduler
```

2. Create a virtual environment (recommended):

```bash
python -m venv myenv
```

3. Activate the virtual environment:

- On Windows:

```bash
myenv\Scripts\activate
```

- On macOS/Linux:

```bash
source myenv/bin/activate
```

4. Install the required packages:

```bash
pip install websockets paho-mqtt
```

## Usage

1. Start the server:

```bash
python server.py
```

2. Open the web interface:

   - Open `index.html` in your web browser
   - The server will be running on `ws://localhost:8765`

3. Set your schedule:
   - Enter the desired ON time in 24-hour format (HH:MM)
   - Enter the desired OFF time in 24-hour format (HH:MM)
   - The schedule will be automatically applied

## Configuration

The MQTT broker settings can be modified in `server.py`:

```python
MQTT_BROKER = '157.173.101.159'  # Replace with your broker IP
MQTT_PORT = 1883
MQTT_TOPIC = 'relay/schedule'
```

## Project Structure

- `server.py` - WebSocket server and MQTT client
- `subscriber.py` - MQTT subscriber for testing
- `index.html` - Web interface
- `style.css` - Styling for the web interface
- `script.js` - Client-side JavaScript

## Notes

- The server checks the schedule every 30 seconds
- Times should be entered in 24-hour format (HH:MM)
- Make sure your MQTT broker is running and accessible
- The web interface must be kept open for the schedule to work

## License

This project is open source and available under the MIT License.
