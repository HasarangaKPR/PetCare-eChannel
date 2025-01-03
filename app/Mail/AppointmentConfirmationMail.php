<?php

namespace App\Mail;

use Illuminate\Bus\Queueable;
use Illuminate\Contracts\Queue\ShouldQueue;
use Illuminate\Mail\Mailable;
use Illuminate\Mail\Mailables\Content;
use Illuminate\Mail\Mailables\Envelope;
use Illuminate\Queue\SerializesModels;


class AppointmentConfirmationMail extends Mailable
{
    use Queueable, SerializesModels;
    public $appointment;
    public $doctor;
    /**
     * Create a new message instance.
     */
    public function __construct($appointment, $doctor)
    {
        $this->appointment = $appointment;
        $this->doctor = $doctor;
    }

    /**
     * Get the message envelope.
     */
    public function envelope(): Envelope
    {
        return new Envelope(
            subject: 'Appointment Confirmation Mail',
        );
    }

    /**
     * Get the message content definition.
     */
    public function content(): Content
    {
        return new Content(
            view: 'email.appointmentConfirmation',
        );
    }

    /**
     * Get the attachments for the message.
     *
     * @return array<int, \Illuminate\Mail\Mailables\Attachment>
     */
    public function attachments(): array
    {
        return [];
    }
    public function build()
    {
        return $this->view('email.appointmentConfirmation')
                    ->with(['appointment'=> $this -> appointment])
                    ->with(['doctor'=> $this -> doctor]);
                    
    }
}
