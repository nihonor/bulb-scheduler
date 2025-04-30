# Bulb Scheduler

A web-based application that allows you to schedule your smart bulb to turn on and off at specific times using MQTT protocol.

## Features

- Web-based interface for easy scheduling
- Real-time MQTT communication
- 24-hour time format support
- Automatic schedule checking every 30 seconds
- MQTT subscriber for testing and monitoring

## Prerequisites

- Python 3.7 or higher
- pip (Python package manager)
- Web browser (Chrome, Firefox, or Edge recommended)
- MQTT broker (default configuration uses a public broker)

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

- On Windows (using PowerShell):

```bash
.\myenv\Scripts\activate
```

- On Windows (using Command Prompt):

```bash
myenv\Scripts\activate.bat
```

- On macOS/Linux:

```bash
source myenv/bin/activate
```

4. Install the required packages:

```bash
# Make sure pip is up to date
python -m pip install --upgrade pip

# Install required packages
pip install websockets paho-mqtt pyserial
```

If you encounter any issues with the virtual environment, you can also install the packages globally:

```bash
pip install websockets paho-mqtt pyserial
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

4. (Optional) Run the MQTT subscriber for testing:

```bash
python subscriber.py
```

## Configuration

The MQTT broker settings can be modified in `server.py`:

```python
MQTT_BROKER = '157.173.101.159'  # Replace with your broker IP
MQTT_PORT = 1883
MQTT_TOPIC = 'relay/schedule'
```

## Project Structure

- `server.py` - WebSocket server and MQTT client
- `subscriber.py` - MQTT subscriber for testing and monitoring
- `index.html` - Web interface
- `style.css` - Styling for the web interface
- `script.js` - Client-side JavaScript

## Notes

- The server checks the schedule every 30 seconds
- Times should be entered in 24-hour format (HH:MM)
- Make sure your MQTT broker is running and accessible
- The web interface must be kept open for the schedule to work
- The subscriber.py script can be used to monitor MQTT messages and test the system

## Troubleshooting

If you encounter any issues:

1. Make sure all required packages are installed
2. Verify that the MQTT broker is accessible
3. Check that the WebSocket server is running
4. Ensure the web interface is properly connected to the WebSocket server
5. If virtual environment activation fails, try installing packages globally
6. If you get a "ModuleNotFoundError", verify that the package was installed correctly

## License

This project is open source and available under the MIT License.
