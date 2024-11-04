<!DOCTYPE html>
<html>
<head>
    <title>Appointment Confirmation</title>
</head>
<body>
    <h1>Appointment Confirmation</h1>
    <p>Dear {{ $appointment->customerName }},</p>
    <p>Your appointment with Dr. {{ $doctor->doctorName }} has been confirmed.</p>
    <p><strong>Appointment Details:</strong></p>
    <ul>
        <li>Date: {{ $appointment->date }}</li>
        <li>Time: {{ $appointment->appointmentTime }} to {{ $appointment->endTime }}</li>
    </ul>
    <p>Thank you for booking with us.</p>
    <p>Best regards,<br>Team</p>
</body>
</html>
