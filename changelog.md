# Changelog Material Plane Foundry Module
### v2.1.4 - 05-05-2022
Fixes:
<ul>
    <li>Invisible non-owned tokens can no longer be moved, even if 'Non-Owned Movement' is enabled</li>
    <li>If 'Non-Owned Movement' is disabled, non-owned tokens no longer take priority over owned tokens when searching for the nearest token</li>
    <li>Fixed pen menu not showing up properly</li>
    <li>Fixed scale x/y slider, it now allows for floats and allows values between 0 and 2</li>
    <li>The target player can now change settings (the GM needs to be logged in)</li>
</ul>

Additions:
<ul>
    <li>Added support for touch screens</li>
    <li>Added an experimental token collision detection to prevent a moving token from ending up on a space already occupied by another token. Can be enabled in the module settings.</li>
    <li>Added a 'Restart Sensor' button to the sensor configuration</li>
    <li>Displayed points in the sensor configuration are now colored and numbered</li>
</ul>

Other:
<ul>
    <li>Revamped the configuration of everything. All configuration, including module settings, base configuration, etc, is done through a single configuration menu.</li>
</ul>

### v2.1.3 - 26-01-2022
Fixes:
<ul>
    <li>Fixed X and Y Offset in 'Sensor Configuration'</li>
</ul>

Additions:
<ul>
    <li>Added X and Y Scaling to 'Sensor Configuration'</li>
    <li>Multi-point and offset calibration are again implemented. Check the wiki for more info on how to use this: https://github.com/CDeenen/MaterialPlane/wiki/Beta-Hardware-Guide#sensor-calibration</li>
    <li>Added support for executing macros using an IR remote control (beta HW only). More info here: https://github.com/CDeenen/MaterialPlane/wiki/Beta-Hardware-Guide#ir-remote-setup</li>
</ul>

Other:
<ul>
    <li>Moved the 'Base Setup' button to the 'Game Settings' tab, so all MP buttons are located at the same place</li>
    <li>The 'Target' account now also has access to 'Base Setup'</li>
</ul>

### v2.1.2 - 30-12-2021
<ul>
<li>Fixed Foundry v9 compatibility</li>
<li>In the module settings, changed setting name 'Enable module' to 'Connect to the Sensor' since that makes more sense</li>
</ul>

### v2.1.1 - 17-11-2021
Fixes:
<ul>
    <li>Foundry will now connnect to Material Server if the Foundry server is secured (for example, when using the Forge)</li>
    <li>Moving a token around but dropping it on the gridspace it came from, no longer results in wrong token positioning</li>
</ul>

Additions:
<ul>
    <li>left-clicking the pen when in token control mode now deselects the token</li>
    <li>left-clicking or right-clicking the pen when in token control mode now deselects all tokens when cursor is not above a token</li>
    <li>center-clicking/rotating the pen when in token control mode now moves and rotates tokens</li>
    <li>Pen menu now autohides when the pen is deactivated</li>
    <li>Added a 'Download Utility' to the module settings from where you can check your current versions and download the latest versions of the hardware firmware and Material Server</li>
</ul>

Other:
<ul>
    <li>Changed 'Calibration Menu' to 'Sensor Configuration'</li>
    <li>Made 'Enable module' setting functional. It prevents that client from trying to connect to the sensor</li>
    <li>Reduced the rate at which the module will attempt to connect to the sensor, reducing the amount of notifications in case of connection problems</li>
</ul>

Compatible with:
<ul>
    <li><b>Sensor firmware: </b>v2.1.2</li>
    <li><b>Material Server: </b>v1.0.3 (not yet released)</li>
</ul>

### v2.1.0 - 12-10-2021
<b>Updating the sensor firmware to v2.1.0 is required</b>
Additions:
<ul>
    <li>You can now configure the websocket port to use. <b>For current users: This means that you need to add this to the 'Sensor Module IP Address' module setting</b></li>
    <li>Material Plane can connect through Material Server, using it as a proxy server to allow MP to function on SSL Foundry servers (requires MS v1.0.3)</li>
    <li>Through Material Server, MP can connect to the server using the USB Serial Port (requires MS v1.0.3)</li>
    <li>Added offset compensation for when, after calibration, there is an offset between the base location and in-game location</li>
    <li>Made elements in the calibration screen collapsible to prevent excessive scrolling</li>
    <li>Added 'Auto exposure' button to the calibration screen (only works for Beta HW)</li>
</ul>

Fixes:
<ul>
    <li>All pen functions now work properly</li>
    <li>If a token was dropped on the same spot it as picked up from, the token location would not return to the center of the grid. This has been fixed</li>
</ul>

Other:
<ul>
    <li>Cursor of the pen now hides after 1 second of inactivity</li>
    <li>Reduced the max average count to 20</li>
    <li>Minor changes to the communication protocol between sensor and module</li>
    <li>Battery percentage calculation has been moved to the sensor</li>
</ul>

Compatible with:
<ul>
    <li><b>Sensor firmware: </b>v2.1.0</li>
    <li><b>Material Server: </b>v1.0.3</li>
</ul>

### v2.0.1 - 16-07-2021
Additions:
<ul>
    <li>'Average Count' is now also editable for DIY sensors (using calibration screen), which allows you to improve positional accuracy at the cost of responsiveness.</li>
    <li>Improved on-screen calibration instructions</li>
</ul>

Fixes:
<ul>
    <li>Fixed issue where sensor would stay in calibration mode if calibration was not successfully completed.</li>
    <li>Removed console error that appeared for the GM when calibration was done.</li>
    <li>WebSocket client no longer creates duplicate connections, which resulted in errors</li>
</ul>

Other:
<ul>
    <li>Removed 'Hardware Variant' module setting, since it's now autodetected</li>
</ul>

### v2.0.0 - 15-07-2021
This is basically a complete rewrite of the module, made with support for the new hardware in mind.<br>
The old hardware is compatible, but requires an update.<br>
Please not that the configuration for the new hardware is completely different, please read the documentation: https://github.com/CDeenen/MaterialPlane/wiki/Arduino-Instructions<br>
Foundry 0.7 is no longer supported.<br>

### v1.0.2 - 26-10-2020
Additions:
<ul>
    <li>Localization support</li>
    <li>Added a warning that the module does not work over SSL</li>
    <li>0.7.5 support, including the new token drag vision setting</li>
</ul>
Foundry v0.6.6 is no longer supported (it might still work, though)

### v1.0.1 - 27-09-2020
Fixes:
<ul>
    <li>Simplified and improved sensitivity settings</li>
    <li>Fixed issue where the calibration menu would not update properly</li>
    <li>Bigger tokens now center properly</li>
    <li>Multipoint calibration fixed, multipoint offset added</li>
</ul>
Additions:
<ul>
    <li>Added X and Y compensation to fine-tune the measured coordinate</li>
    <li>Added calibration and offset checkboxes to calibration menu</li>
    <li>Added low battery notification</li>
</ul>

### v1.0.0 - 22-09-2020
Initial Release