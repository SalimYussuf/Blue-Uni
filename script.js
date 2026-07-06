// ===== DATA =====
const programs = [
  { id: 1, name: "Renewable Energy Systems", faculty: "Stream A: Fresh Graduates", level: "Stream A", duration: "4-8 Weeks", fee: "KES 45,000", icon: "☀️", desc: "Solar PV Design & Installation, Grid Integration, Battery Storage Systems, Wind Energy Fundamentals, IEC Compliance & System Commissioning.", req: "Engineering Degree" },
  { id: 2, name: "Power Utility Technology", faculty: "Stream A: Fresh Graduates", level: "Stream A", duration: "6 Weeks", fee: "KES 55,000", icon: "⚡", desc: "SCADA Systems, Smart Metering, Distribution Protection, Power Quality Analysis, Fault Diagnostics.", req: "Engineering Degree" },
  { id: 3, name: "Industrial Automation", faculty: "Stream A: Fresh Graduates", level: "Stream A", duration: "6 Weeks", fee: "KES 60,000", icon: "🤖", desc: "PLC Programming, Motor Drives (VFD), Industrial Sensors, Control Logic & Troubleshooting.", req: "Engineering Degree" },
  { id: 4, name: "Advanced Electrical Installation", faculty: "Stream A: Fresh Graduates", level: "Stream A", duration: "4 Weeks", fee: "KES 40,000", icon: "🏗️", desc: "Industrial Wiring, Control Panel Fabrication, Energy Auditing, IEC Standards Application.", req: "Engineering Degree" },
  { id: 5, name: "Overhead Line Construction & Maintenance", faculty: "Stream B: In-Service Utility Personnel", level: "Stream B", duration: "3-4 Weeks", fee: "Employer Sponsored", icon: "🚧", desc: "Pole climbing safety, Conductor stringing & sagging, Hot-line techniques, Insulator replacement, Transformer installation.", req: "Utility Employee" },
  { id: 6, name: "Substation Equipment O&M", faculty: "Stream B: In-Service Utility Personnel", level: "Stream B", duration: "4 Weeks", fee: "Employer Sponsored", icon: "🔌", desc: "Transformer oil sampling, Buchholz relay testing, Tap changer operation, Circuit breaker servicing (SF6/Vacuum), Switchgear maintenance.", req: "Utility Employee" },
  { id: 7, name: "Power System Protection", faculty: "Stream B: In-Service Utility Personnel", level: "Stream B", duration: "4 Weeks", fee: "Employer Sponsored", icon: "🛡️", desc: "Relay coordination, CT/VT testing, Fault calculations, Protection programming.", req: "Utility Employee" },
  { id: 8, name: "Generation Plant O&M", faculty: "Stream B: In-Service Utility Personnel", level: "Stream B", duration: "4 Weeks", fee: "Employer Sponsored", icon: "🏭", desc: "Diesel & gas turbine maintenance, Synchronization techniques, AVR systems, Auxiliary systems management.", req: "Utility Employee" },
  { id: 9, name: "High Voltage Safety & Regulations", faculty: "Mandatory Core", level: "All Levels", duration: "1 Week", fee: "Included", icon: "⚠️", desc: "Mandatory for all participants. Permit-to-work systems, Isolation & earthing procedures, PPE standards, Emergency response & rescue.", req: "None" }
];

const events = [
  { image: "https://images.unsplash.com/photo-1541339907198-e08756dedf3f?auto=format&fit=crop&q=80&w=600", month: "SEP", day: "10", title: "HV Safety Induction Training", location: "Main Workshop", time: "9:00 AM – 4:00 PM", tags: ["Safety", "Mandatory"], desc: "Comprehensive high-voltage onboarding and zero-tolerance safety briefing for the incoming cohort." },
  { image: "https://images.unsplash.com/photo-1524178232363-1fb2b075b655?auto=format&fit=crop&q=80&w=600", month: "OCT", day: "15", title: "Industry Guest Lecture: Smart Grids", location: "Classroom 1", time: "2:00 PM", tags: ["Guest Lecture", "Smart Grid"], desc: "Senior engineers from partner utility Sompower discussing the future of smart metering in Somaliland." },
  { image: "https://images.unsplash.com/photo-1517486808906-6ca8b3f04846?auto=format&fit=crop&q=80&w=600", month: "NOV", day: "5", title: "Microgrid Commissioning Workshop", location: "Renewable Energy Microgrid Lab", time: "8:30 AM – 5:00 PM", tags: ["Practical", "Solar PV"], desc: "Hands-on integration testing and fault analysis in the dedicated solar PV and battery storage lab." },
  { image: "https://images.unsplash.com/photo-1516321497487-e288fb19713f?auto=format&fit=crop&q=80&w=600", month: "DEC", day: "1", title: "CPD Registration Deadline", location: "Online Portal", time: "5:00 PM", tags: ["Admissions", "CPD"], desc: "Last day for utility personnel to register for the upcoming Stream B professional development modules." },
  { image: "https://images.unsplash.com/photo-1523050854058-8df90110c9f1?auto=format&fit=crop&q=80&w=600", month: "DEC", day: "20", title: "Certification Ceremony", location: "PTS Auditorium", time: "10:00 AM", tags: ["Certification", "Ceremony"], desc: "Awarding internationally aligned, competency-based certificates to our latest industry-ready graduates." }
];

// ===== NAVIGATION =====
function showPage(page) {
  document.querySelectorAll('.page').forEach(p => p.classList.remove('active'));
  document.getElementById(page + '-page').classList.add('active');
  document.querySelectorAll('.nav-links a').forEach(a => a.classList.remove('active'));
  const navEl = document.getElementById('nav-' + page);
  if (navEl) navEl.classList.add('active');
  window.scrollTo(0, 0);
  if (page === 'programs') renderPrograms();
  if (page === 'events') renderEvents();
  if (page === 'apply') { currentStep = 0; renderApplyStep(); }
  setTimeout(setupAnimations, 100);
  return false;
}

// ===== PROGRAMS =====
function renderPrograms(list) {
  const grid = document.getElementById('programs-grid');
  const data = list || programs;
  if (!data.length) { grid.innerHTML = '<p style="color:var(--gray-500);text-align:center;padding:40px;grid-column:1/-1;">No programs match your search.</p>'; return; }
  grid.innerHTML = data.map(p => `
    <div class="program-card animate-on-scroll">
      <div class="program-card-header" data-icon="${p.icon}">
        <div class="program-faculty-tag">${p.faculty}</div>
        <h3>${p.name}</h3>
      </div>
      <div class="program-card-body">
        <div class="program-meta">
          <div class="program-meta-item"><label>Level</label><span>${p.level}</span></div>
          <div class="program-meta-item"><label>Duration</label><span>${p.duration}</span></div>
          <div class="program-meta-item"><label>Annual Fee</label><span>${p.fee}</span></div>
          <div class="program-meta-item"><label>Entry Req.</label><span style="font-size:12px;line-height:1.4;">${p.req}</span></div>
        </div>
        <p>${p.desc}</p>
        <div class="program-actions">
          <button class="btn-sm btn-navy" onclick="showPage('apply')">Apply Now</button>
          <button class="btn-sm btn-ghost">Learn More</button>
        </div>
      </div>
    </div>
  `).join('');
}

function filterPrograms() {
  const q = document.getElementById('prog-search').value.toLowerCase();
  const fac = document.getElementById('prog-faculty').value;
  const lvl = document.getElementById('prog-level').value;
  const filtered = programs.filter(p => {
    return (!q || p.name.toLowerCase().includes(q) || p.faculty.toLowerCase().includes(q))
      && (!fac || p.faculty === fac)
      && (!lvl || p.level === lvl);
  });
  renderPrograms(filtered);
}

// ===== EVENTS =====
function renderEvents() {
  const list = document.getElementById('events-list');
  list.innerHTML = events.map(e => `
    <div class="event-item event-card-container animate-on-scroll">
      <div class="event-card-img-wrap">
        <img src="${e.image}" style="width: 100%; height: 100%; object-fit: cover;" alt="Event image" />
      </div>
      <div class="event-card-inner">
        <div class="event-date" style="flex-shrink: 0; align-self: flex-start;">
          <div class="month">${e.month}</div>
          <div class="day">${e.day}</div>
        </div>
        <div class="event-info">
          <h4>${e.title}</h4>
          <p>${e.time} &middot; ${e.location}</p>
          <p style="margin-top:6px;">${e.desc}</p>
          <div class="event-tags">${e.tags.map(t => `<span class="event-tag">${t}</span>`).join('')}</div>
        </div>
      </div>
    </div>
  `).join('');
}

// ===== APPLICATION FORM =====
let currentStep = 0;
const formSteps = [
  {
    title: "Personal Details",
    subtitle: "Tell us about yourself",
    html: `
      <div class="form-section">
        <h4>Basic Information</h4>
        <div class="form-row">
          <div class="form-group"><label>First Name *</label><input type="text" placeholder="e.g. Amara" required></div>
          <div class="form-group"><label>Last Name *</label><input type="text" placeholder="e.g. Osei" required></div>
        </div>
        <div class="form-row">
          <div class="form-group"><label>Date of Birth *</label><input type="date" required></div>
          <div class="form-group"><label>Gender *</label>
            <select required><option value="">Select</option><option>Male</option><option>Female</option><option>Prefer not to say</option></select>
          </div>
        </div>
        <div class="form-row">
          <div class="form-group"><label>Nationality *</label><input type="text" placeholder="e.g. Kenyan" required></div>
          <div class="form-group"><label>National ID / Passport No. *</label><input type="text" placeholder="ID or Passport number" required></div>
        </div>
      </div>
      <div class="form-section">
        <h4>Contact Information</h4>
        <div class="form-row">
          <div class="form-group"><label>Email Address *</label><input type="email" placeholder="your@email.com" required></div>
          <div class="form-group"><label>Phone Number *</label><input type="tel" placeholder="+254 7XX XXX XXX" required></div>
        </div>
        <div class="form-row full">
          <div class="form-group"><label>Postal Address</label><input type="text" placeholder="P.O. Box or street address"></div>
        </div>
        <div class="form-row">
          <div class="form-group"><label>County / Region</label><input type="text" placeholder="e.g. Nairobi"></div>
          <div class="form-group"><label>Country *</label>
            <select required><option value="">Select</option><option>Kenya</option><option>Uganda</option><option>Tanzania</option><option>Ethiopia</option><option>Rwanda</option><option>Other</option></select>
          </div>
        </div>
      </div>
    `
  },
  {
    title: "Background & Experience",
    subtitle: "Your technical history",
    html: `
      <div class="form-section">
        <h4>Technical Education</h4>
        <div class="form-row">
          <div class="form-group"><label>University / Institution *</label><input type="text" placeholder="Name of institution" required></div>
          <div class="form-group"><label>Year of Graduation *</label><input type="number" placeholder="e.g. 2024" required></div>
        </div>
        <div class="form-row">
          <div class="form-group"><label>Degree / Qualification *</label>
            <select required><option value="">Select qualification</option><option>BSc Electrical Engineering</option><option>BSc Mechatronics</option><option>Higher National Diploma</option><option>Other</option></select>
          </div>
          <div class="form-group"><label>Overall Grade / Classification *</label><input type="text" placeholder="e.g. First Class, Upper Second" required></div>
        </div>
      </div>
      <div class="form-section">
        <h4>Current Employment (If applicable)</h4>
        <div class="form-row">
          <div class="form-group"><label>Current Employer</label><input type="text" placeholder="e.g. Sompower, Telesom"></div>
          <div class="form-group"><label>Job Title</label><input type="text" placeholder="e.g. Linesman, Junior Engineer"></div>
        </div>
        <div class="form-row full">
          <div class="form-group"><label>Years of Experience</label><input type="number" placeholder="e.g. 3"></div>
        </div>
      </div>
    `
  },
  {
    title: "Program Selection",
    subtitle: "Choose your desired program",
    html: `
      <div class="form-section">
        <h4>Program Choice</h4>
        <div class="form-row full">
          <div class="form-group"><label>Stream *</label>
            <select id="sel-faculty" onchange="updatePrograms()" required>
              <option value="">-- Select a Stream --</option>
              <option>Stream A: Fresh Graduates</option>
              <option>Stream B: In-Service Utility Personnel</option>
              <option>Mandatory Core</option>
            </select>
          </div>
        </div>
        <div class="form-row full">
          <div class="form-group"><label>Module / Program *</label>
            <select id="sel-program" required><option value="">-- Select Stream first --</option></select>
          </div>
        </div>
        <div class="form-row full">
          <div class="form-group"><label>Sponsorship Status</label>
            <select><option value="">Self-Sponsored</option><option value="">Employer-Sponsored</option></select>
          </div>
        </div>
      </div>
      <div class="form-section">
        <h4>Statement of Purpose</h4>
        <div class="form-row full">
          <div class="form-group">
            <label>Why do you want to undertake this technical training? *</label>
            <textarea style="min-height:140px;" placeholder="Describe your motivation, relevant experience, and career goals in the power sector..." required></textarea>
          </div>
        </div>
      </div>
    `
  },
  {
    title: "Documents Upload",
    subtitle: "Upload supporting documents",
    html: `
      <div class="form-section">
        <h4>Required Documents</h4>
        <p style="font-size:13px;color:var(--gray-500);margin-bottom:20px;">Upload clear scanned copies or high-resolution photos. Accepted formats: PDF, JPG, PNG. Max size: 5MB each.</p>
        <div style="display:flex;flex-direction:column;gap:16px;">
          <div style="display:flex;justify-content:space-between;align-items:center;padding:14px 16px;background:var(--gray-50);border-radius:var(--radius);border:1.5px solid var(--gray-100);">
            <div>
              <div style="font-size:14px;font-weight:500;color:var(--gray-900);">National ID or Passport</div>
              <div style="font-size:12px;color:var(--gray-500);">Required · PDF or image</div>
            </div>
            <button class="btn-sm btn-navy" onclick="markUploaded(this)">Upload</button>
          </div>
          <div style="display:flex;justify-content:space-between;align-items:center;padding:14px 16px;background:var(--gray-50);border-radius:var(--radius);border:1.5px solid var(--gray-100);">
            <div>
              <div style="font-size:14px;font-weight:500;color:var(--gray-900);">Academic Transcripts / Certificate</div>
              <div style="font-size:12px;color:var(--gray-500);">Required · PDF or image</div>
            </div>
            <button class="btn-sm btn-navy" onclick="markUploaded(this)">Upload</button>
          </div>
          <div style="display:flex;justify-content:space-between;align-items:center;padding:14px 16px;background:var(--gray-50);border-radius:var(--radius);border:1.5px solid var(--gray-100);">
            <div>
              <div style="font-size:14px;font-weight:500;color:var(--gray-900);">Passport-size Photo</div>
              <div style="font-size:12px;color:var(--gray-500);">Required · JPG or PNG</div>
            </div>
            <button class="btn-sm btn-navy" onclick="markUploaded(this)">Upload</button>
          </div>
          <div style="display:flex;justify-content:space-between;align-items:center;padding:14px 16px;background:var(--gray-50);border-radius:var(--radius);border:1.5px solid var(--gray-100);">
            <div>
              <div style="font-size:14px;font-weight:500;color:var(--gray-900);">Reference Letter (Optional)</div>
              <div style="font-size:12px;color:var(--gray-500);">Optional · PDF or image</div>
            </div>
            <button class="btn-sm btn-ghost" onclick="markUploaded(this)">Upload</button>
          </div>
        </div>
      </div>
    `
  },
  {
    title: "Review & Submit",
    subtitle: "Review your application before submitting",
    html: `
      <div class="form-section">
        <h4>Application Summary</h4>
        <div style="background:var(--gray-50);border-radius:var(--radius-lg);padding:20px;font-size:14px;">
          <div style="display:grid;grid-template-columns:1fr 1fr;gap:16px;">
            <div><div style="font-size:11px;text-transform:uppercase;letter-spacing:1px;color:var(--gray-500);margin-bottom:4px;">Applicant</div><div style="font-weight:500;color:var(--navy);">Amara Osei</div></div>
            <div><div style="font-size:11px;text-transform:uppercase;letter-spacing:1px;color:var(--gray-500);margin-bottom:4px;">Program</div><div style="font-weight:500;color:var(--navy);">BSc Computer Science</div></div>
            <div><div style="font-size:11px;text-transform:uppercase;letter-spacing:1px;color:var(--gray-500);margin-bottom:4px;">Intake</div><div style="font-weight:500;color:var(--navy);">September 2025</div></div>
            <div><div style="font-size:11px;text-transform:uppercase;letter-spacing:1px;color:var(--gray-500);margin-bottom:4px;">Study Mode</div><div style="font-weight:500;color:var(--navy);">Full-time</div></div>
          </div>
          <div style="border-top:1px solid var(--gray-100);margin-top:16px;padding-top:16px;">
            <div style="font-size:11px;text-transform:uppercase;letter-spacing:1px;color:var(--gray-500);margin-bottom:8px;">Documents Status</div>
            <div style="display:flex;gap:8px;flex-wrap:wrap;">
              <span style="background:#e6f4ed;color:#1a6640;font-size:12px;font-weight:600;padding:4px 10px;border-radius:4px;">✓ National ID</span>
              <span style="background:#e6f4ed;color:#1a6640;font-size:12px;font-weight:600;padding:4px 10px;border-radius:4px;">✓ Transcripts</span>
              <span style="background:#e6f4ed;color:#1a6640;font-size:12px;font-weight:600;padding:4px 10px;border-radius:4px;">✓ Photo</span>
            </div>
          </div>
        </div>
      </div>
      <div class="form-section">
        <h4>Declaration</h4>
        <label style="display:flex;gap:12px;align-items:flex-start;font-size:14px;color:var(--gray-700);cursor:pointer;line-height:1.6;">
          <input type="checkbox" style="margin-top:4px;flex-shrink:0;width:16px;height:16px;">
          I confirm that all information provided in this application is accurate and complete. I understand that providing false information may result in disqualification or expulsion.
        </label>
        <label style="display:flex;gap:12px;align-items:flex-start;font-size:14px;color:var(--gray-700);cursor:pointer;line-height:1.6;margin-top:12px;">
          <input type="checkbox" style="margin-top:4px;flex-shrink:0;width:16px;height:16px;">
          I agree to the <span style="color:var(--navy);font-weight:500;text-decoration:underline;">Terms & Conditions</span> and <span style="color:var(--navy);font-weight:500;text-decoration:underline;">Privacy Policy</span>.
        </label>
      </div>
    `
  }
];

function renderApplyStep() {
  const step = formSteps[currentStep];
  const progress = Math.round(((currentStep) / formSteps.length) * 100);
  document.getElementById('apply-form-card').innerHTML = `
    <div class="form-card-header">
      <h2>${step.title}</h2>
      <p>${step.subtitle}</p>
    </div>
    <div class="form-card-body">${step.html}</div>
    <div class="form-card-footer">
      <div style="flex: 1; display: flex; align-items: center; min-width: 200px;">
        <div class="progress-bar"><div class="progress-fill" style="width:${progress}%"></div></div>
        <span class="progress-label">Step ${currentStep + 1} of ${formSteps.length}</span>
      </div>
      <div style="display: flex; gap: 8px; flex-shrink: 0; flex-wrap: wrap;">
      ${currentStep > 0 ? `<button class="btn-sm btn-ghost" onclick="goToStep(${currentStep - 1})">← Back</button>` : ''}
      ${currentStep < formSteps.length - 1
      ? `<button class="btn-sm btn-navy" onclick="nextStep()">Continue →</button>`
      : `<button class="btn-sm btn-navy" onclick="submitApplication()" style="background:var(--success);">Submit Application</button>`
    }
      </div>
    </div>
  `;
  document.querySelectorAll('.step-item').forEach((el, i) => {
    el.classList.remove('active', 'done');
    if (i < currentStep) el.classList.add('done');
    else if (i === currentStep) el.classList.add('active');
  });
}

function nextStep() {
  const currentFields = document.getElementById('apply-form-card').querySelectorAll('input[required], select[required]');
  for (let field of currentFields) {
    if (!field.value.trim()) {
      alert('Please fill out all required fields before proceeding.');
      field.focus();
      return;
    }
  }
  goToStep(currentStep + 1);
}

function goToStep(n) {
  if (n >= 0 && n < formSteps.length) { currentStep = n; renderApplyStep(); window.scrollTo(0, 120); }
}

function submitApplication() {
  const trackId = 'MU-2025-' + Math.floor(100000 + Math.random() * 900000);
  document.getElementById('apply-form-card').innerHTML = `
    <div class="success-screen">
      <div class="success-icon">✓</div>
      <h3>Application Submitted!</h3>
      <p>Your application has been received and is under review. You will receive a confirmation email within 24 hours.</p>
      <div class="tracking-id">${trackId}</div>
      <p style="font-size:13px;color:var(--gray-500);">Save your tracking ID to check your application status</p>
      <button class="btn-primary" onclick="showPage('home')" style="margin-top:16px;">Return to Homepage</button>
    </div>
  `;
}

function markUploaded(btn) {
  btn.textContent = '✓ Uploaded';
  btn.style.background = 'var(--success)';
  btn.style.color = 'white';
  btn.disabled = true;
}

function updatePrograms() {
  const fac = document.getElementById('sel-faculty').value;
  const progs = programs.filter(p => p.faculty === fac);
  const sel = document.getElementById('sel-program');
  sel.innerHTML = progs.length
    ? progs.map(p => `<option>${p.name}</option>`).join('')
    : '<option>No programs in this faculty yet</option>';
}

// Init
renderPrograms();
renderEvents();
// ===== ANIMATIONS =====
const observerOptions = {
  root: null,
  rootMargin: '0px',
  threshold: 0.1
};

const observer = new IntersectionObserver((entries, observer) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('is-visible');
      observer.unobserve(entry.target);
    }
  });
}, observerOptions);

function setupAnimations() {
  document.querySelectorAll('.animate-on-scroll').forEach(el => {
    observer.observe(el);
  });
}

// Call on load and on page changes
document.addEventListener('DOMContentLoaded', setupAnimations);
