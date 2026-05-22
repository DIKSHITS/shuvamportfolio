import React, { useState, useEffect, useRef } from "react";
import "../styles/consultation.css";

const ConsultationInline = ({ onClose }) => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [date, setDate] = useState("");
  const [time, setTime] = useState("");
  const [notes, setNotes] = useState("");
  const ref = useRef(null);

  useEffect(()=>{
    const onDoc = (e)=>{
      if(ref.current && !ref.current.contains(e.target)) onClose();
    }
    document.addEventListener('click', onDoc);
    return ()=>document.removeEventListener('click', onDoc);
  },[onClose]);

  const openWhatsApp = ()=>{
    const msg = `Hi, my name is ${name || ''}. I'd like to book a consultation${date&&time? ` on ${date} at ${time}.`:'.'} ${notes? 'Notes: '+notes : ''}`;
    window.open(`https://wa.me/?text=${encodeURIComponent(msg)}`,'_blank');
  }

  const openGoogleCalendar = ()=>{
    const title = encodeURIComponent(`Consultation with ${name || 'Client'}`);
    const details = encodeURIComponent(`Email: ${email}\nNotes: ${notes}`);
    const url = `https://www.google.com/calendar/render?action=TEMPLATE&text=${title}&details=${details}`;
    window.open(url,'_blank');
  }

  return (
    <div className="consultation-inline" ref={ref}>
      <div className="inline-row">
        <input placeholder="Name" value={name} onChange={e=>setName(e.target.value)} />
        <input placeholder="Email" value={email} onChange={e=>setEmail(e.target.value)} />
      </div>
      <div className="inline-row">
        <input type="date" value={date} onChange={e=>setDate(e.target.value)} />
        <input type="time" value={time} onChange={e=>setTime(e.target.value)} />
      </div>
      <textarea placeholder="Notes" value={notes} onChange={e=>setNotes(e.target.value)} />
      <div className="inline-actions">
        <button className="consultation-google" onClick={openGoogleCalendar}>Google Calendar</button>
        <button className="consultation-whatsapp" onClick={openWhatsApp}>WhatsApp</button>
      </div>
    </div>
  );
}

export default ConsultationInline;
