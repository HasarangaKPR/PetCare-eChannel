<!DOCTYPE html>
<html>
<head>
    <title>Booking Confirmation</title>
</head>
<body>
    <h1>Booking Confirmation</h1>
    <p>Dear {{ $bookingDetails['customersName'] }},</p>
    <p>Your booking at {{ $bookingDetails['dayCareCenterName'] }} has been confirmed.</p>
    <p><strong>Room Number:</strong> {{ $bookingDetails['room_number'] }}</p>
    <p><strong>Start Date:</strong> {{ $bookingDetails['start_date'] }}</p>
    <p><strong>End Date:</strong> {{ $bookingDetails['end_date'] }}</p>
    <p>Thank you for choosing our service.</p>
    <p>Best regards,<br>Team</p>
</body>
</html>
