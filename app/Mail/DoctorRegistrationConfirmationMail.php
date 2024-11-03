<?php

namespace App\Mail;

use Illuminate\Bus\Queueable;
use Illuminate\Contracts\Queue\ShouldQueue;
use Illuminate\Mail\Mailable;
use Illuminate\Mail\Mailables\Content;
use Illuminate\Mail\Mailables\Envelope;
use Illuminate\Queue\SerializesModels;

class DoctorRegistrationConfirmationMail extends Mailable
{
    use Queueable, SerializesModels;
    
    public $user;
    public $doctor;

    /**
     * Create a new message instance.
     */
    public function __construct($user,$doctor)
    {
        $this->user = $user;
        $this->doctor = $doctor;
    }

    /**
     * Get the message envelope.
     */
    public function envelope(): Envelope
    {
        return new Envelope(
            subject: 'Doctor Registration Confirmation Mail',
        );
    }

    /**
     * Get the message content definition.
     */
    public function content(): Content
    {
        return new Content(
            view: 'email.DoctorRegistrationConfirmationMail',
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
        return $this->view('email.DoctorRegistrationConfirmationMail')
                    ->with(['user' => $this ->user])
                    ->with(['doctor'=> $this -> doctor]);
    }
}
