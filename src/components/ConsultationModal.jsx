import React, { useState } from "react";
import "../styles/consultation.css";

function pad(n){return n<10?"0"+n:n}

function toCalendarRange(dateStr, timeStr, durationMinutes=30){
  if(!dateStr || !timeStr) return null;
  const dt = new Date(dateStr + 'T' + timeStr);
  const start = new Date(dt);
  const end = new Date(dt.getTime() + durationMinutes*60000);
  const toUtcString = (d)=>{
    return d.getUTCFullYear().toString()+
      pad(d.getUTCMonth()+1)+pad(d.getUTCDate())+'T'+
      pad(d.getUTCHours())+pad(d.getUTCMinutes())+pad(d.getUTCSeconds())+'Z';
  }
  return `${toUtcString(start)}/${toUtcString(end)}`;
}

const ConsultationModal = ({ onClose }) => {
  const [name,setName] = useState("");
  const [email,setEmail] = useState("");
  const [date,setDate] = useState("");
  const [time,setTime] = useState("");
  const [notes,setNotes] = useState("");

  const openGoogleCalendar = () => {
    const title = encodeURIComponent(`Consultation with ${name || 'Client'}`);
    const details = encodeURIComponent(`Email: ${email}\nNotes: ${notes}`);
    const range = toCalendarRange(date,time,30);
    const datesParam = range ? `&dates=${range}` : '';
    const url = `https://www.google.com/calendar/render?action=TEMPLATE&text=${title}&details=${details}${datesParam}`;
    window.open(url,'_blank');
  }

  const openWhatsApp = () => {
    const msg = `Hi, my name is ${name || ''}. I'd like to book a consultation` +
      (date && time ? ` on ${date} at ${time}.` : '.') +
      (notes ? `\nNotes: ${notes}` : '');
    const url = `https://wa.me/?text=${encodeURIComponent(msg)}`;
    window.open(url,'_blank');
  }

  return (
    <div className="consultation-overlay" onClick={onClose}>
      <div className="consultation-modal" onClick={e=>e.stopPropagation()}>
        <button className="consultation-close" onClick={onClose}>×</button>
        <h2>Book Consultation</h2>

        <div className="consultation-form">
          <input placeholder="Your name" value={name} onChange={e=>setName(e.target.value)} />
          <input placeholder="Email (optional)" value={email} onChange={e=>setEmail(e.target.value)} />
          <div className="row">
            <input type="date" value={date} onChange={e=>setDate(e.target.value)} />
            <input type="time" value={time} onChange={e=>setTime(e.target.value)} />
          </div>
          <textarea placeholder="Notes (optional)" value={notes} onChange={e=>setNotes(e.target.value)} />
        </div>

        <div className="consultation-options">
          <button className="consultation-google" onClick={openGoogleCalendar}>Schedule via Google Calendar</button>
          <button className="consultation-whatsapp" onClick={openWhatsApp}>Start WhatsApp Chat</button>
        </div>
      </div>
    </div>
  );
}

export default ConsultationModal;
