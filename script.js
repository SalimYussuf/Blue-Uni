// ===== DATA =====
        const programs = [
            { id: 1, name: "Bachelor of Medicine & Surgery (MBChB)", faculty: "Medicine & Health Sciences", level: "Undergraduate", duration: "6 years", fee: "KES 320,000/yr", icon: "⚕️", desc: "Comprehensive medical training combining clinical practice and scientific foundations. Fully accredited by the Medical Practitioners Board.", req: "A-level Biology & Chemistry, minimum B grade" },
            { id: 2, name: "BSc Civil Engineering", faculty: "Engineering", level: "Undergraduate", duration: "4 years", fee: "KES 185,000/yr", icon: "🏗️", desc: "Covers structural, geotechnical, water and transport engineering with state-of-the-art labs and industry attachments.", req: "A-level Maths & Physics, minimum C+ grade" },
            { id: 3, name: "MBA – Business Administration", faculty: "Business & Economics", level: "Postgraduate", duration: "2 years", fee: "KES 210,000/yr", icon: "💼", desc: "A rigorous management program for mid-career professionals, with specialisations in Finance, Strategy, and Entrepreneurship.", req: "Bachelor's degree, 3 years work experience" },
            { id: 4, name: "LLB – Bachelor of Laws", faculty: "Law", level: "Undergraduate", duration: "4 years", fee: "KES 155,000/yr", icon: "⚖️", desc: "A comprehensive legal education covering public, private and international law, with moot court training and legal aid clinic.", req: "A-level any 2 subjects, minimum C grade" },
            { id: 5, name: "BSc Computer Science", faculty: "Computing & IT", level: "Undergraduate", duration: "4 years", fee: "KES 175,000/yr", icon: "💻", desc: "Covers algorithms, AI/ML, software engineering and cybersecurity. Includes industry internship in year 3.", req: "A-level Maths, minimum C grade" },
            { id: 6, name: "MSc Data Science & AI", faculty: "Computing & IT", level: "Postgraduate", duration: "18 months", fee: "KES 240,000/yr", icon: "🤖", desc: "Cutting-edge program covering machine learning, big data, and applied AI. Features research labs with GPU clusters.", req: "BSc in a quantitative field, minimum Upper Second" },
            { id: 7, name: "BEd – Bachelor of Education (Science)", faculty: "Education", level: "Undergraduate", duration: "4 years", fee: "KES 130,000/yr", icon: "📚", desc: "Prepares qualified science teachers for secondary and tertiary institutions, with teaching practice in partner schools.", req: "A-level Science subjects, minimum C grade" },
            { id: 8, name: "BSc Nursing", faculty: "Medicine & Health Sciences", level: "Undergraduate", duration: "4 years", fee: "KES 160,000/yr", icon: "🏥", desc: "Combines clinical nursing skills with community health, midwifery, and healthcare management modules.", req: "A-level Biology & any Science, minimum C grade" },
        ];

        const events = [
            { image: "https://images.unsplash.com/photo-1541339907198-e08756dedf3f?auto=format&fit=crop&q=80&w=600", month: "APR", day: "5", title: "Open Day – All Faculties", location: "Main Campus, Nairobi", time: "9:00 AM – 4:00 PM", tags: ["Open Day", "All Faculties"], desc: "Tour facilities, meet faculty, and talk to current students. Register for a guided tour." },
            { image: "https://images.unsplash.com/photo-1524178232363-1fb2b075b655?auto=format&fit=crop&q=80&w=600", month: "APR", day: "18", title: "Public Lecture: The Future of AI in Africa", location: "Chancellor's Auditorium", time: "2:00 PM", tags: ["Public Lecture", "Computing"], desc: "Prof. Amara Diallo (MIT) delivers the 2025 Meridian Lecture on artificial intelligence and development." },
            { image: "https://images.unsplash.com/photo-1517486808906-6ca8b3f04846?auto=format&fit=crop&q=80&w=600", month: "MAY", day: "2", title: "Postgraduate Research Symposium", location: "Nairobi Campus", time: "8:30 AM – 5:00 PM", tags: ["Research", "Postgraduate"], desc: "Annual showcase of ongoing doctoral and master's research across all disciplines." },
            { image: "https://images.unsplash.com/photo-1516321497487-e288fb19713f?auto=format&fit=crop&q=80&w=600", month: "MAY", day: "14", title: "Application Deadline Reminder Workshop", location: "Online (Zoom)", time: "10:00 AM", tags: ["Admissions", "Online"], desc: "Our admissions team walks prospective applicants through the online application process step by step." },
            { image: "https://images.unsplash.com/photo-1523050854058-8df90110c9f1?auto=format&fit=crop&q=80&w=600", month: "JUN", day: "20", title: "Graduation Ceremony – Class of 2025", location: "Kasarani Arena, Nairobi", time: "10:00 AM", tags: ["Graduation", "Ceremony"], desc: "The annual graduation ceremony celebrating the Class of 2025. Family attendance welcome." },
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
            return false;
        }

        // ===== PROGRAMS =====
        function renderPrograms(list) {
            const grid = document.getElementById('programs-grid');
            const data = list || programs;
            if (!data.length) { grid.innerHTML = '<p style="color:var(--gray-500);text-align:center;padding:40px;grid-column:1/-1;">No programs match your search.</p>'; return; }
            grid.innerHTML = data.map(p => `
    <div class="program-card">
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
    <div class="event-item" style="flex-direction: column; align-items: stretch; border: 1px solid var(--gray-100); border-radius: var(--radius-lg); overflow: hidden; margin-bottom: 24px; padding: 0;">
      <div style="width: 100%; height: 220px; overflow: hidden; background: var(--gray-50);">
        <img src="${e.image}" style="width: 100%; height: 100%; object-fit: cover;" alt="Event image" />
      </div>
      <div style="display: flex; gap: 24px; padding: 24px; background: var(--white);">
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
          <div class="form-group"><label>First Name *</label><input type="text" placeholder="e.g. Amara"></div>
          <div class="form-group"><label>Last Name *</label><input type="text" placeholder="e.g. Osei"></div>
        </div>
        <div class="form-row">
          <div class="form-group"><label>Date of Birth *</label><input type="date"></div>
          <div class="form-group"><label>Gender *</label>
            <select><option value="">Select</option><option>Male</option><option>Female</option><option>Prefer not to say</option></select>
          </div>
        </div>
        <div class="form-row">
          <div class="form-group"><label>Nationality *</label><input type="text" placeholder="e.g. Kenyan"></div>
          <div class="form-group"><label>National ID / Passport No. *</label><input type="text" placeholder="ID or Passport number"></div>
        </div>
      </div>
      <div class="form-section">
        <h4>Contact Information</h4>
        <div class="form-row">
          <div class="form-group"><label>Email Address *</label><input type="email" placeholder="your@email.com"></div>
          <div class="form-group"><label>Phone Number *</label><input type="tel" placeholder="+254 7XX XXX XXX"></div>
        </div>
        <div class="form-row full">
          <div class="form-group"><label>Postal Address</label><input type="text" placeholder="P.O. Box or street address"></div>
        </div>
        <div class="form-row">
          <div class="form-group"><label>County / Region</label><input type="text" placeholder="e.g. Nairobi"></div>
          <div class="form-group"><label>Country *</label>
            <select><option>Kenya</option><option>Uganda</option><option>Tanzania</option><option>Ethiopia</option><option>Rwanda</option><option>Other</option></select>
          </div>
        </div>
      </div>
    `
            },
            {
                title: "Academic Background",
                subtitle: "Your educational history",
                html: `
      <div class="form-section">
        <h4>Secondary Education</h4>
        <div class="form-row">
          <div class="form-group"><label>School Name *</label><input type="text" placeholder="Name of secondary school"></div>
          <div class="form-group"><label>Year of Completion *</label><input type="number" placeholder="e.g. 2022" min="1990" max="2025"></div>
        </div>
        <div class="form-row">
          <div class="form-group"><label>Qualification *</label>
            <select><option value="">Select qualification</option><option>KCSE</option><option>A-Levels (Cambridge)</option><option>International Baccalaureate</option><option>IGCSE</option><option>Other</option></select>
          </div>
          <div class="form-group"><label>Overall Grade / Score *</label><input type="text" placeholder="e.g. A (81 points) or A B B C C"></div>
        </div>
        <div class="form-row full">
          <div class="form-group"><label>Best Subjects & Grades (3 relevant subjects)</label>
            <textarea placeholder="e.g.&#10;Mathematics – A&#10;Biology – A&#10;Chemistry – B"></textarea>
          </div>
        </div>
      </div>
      <div class="form-section">
        <h4>Previous Tertiary Education (if any)</h4>
        <div class="form-row">
          <div class="form-group"><label>Institution Name</label><input type="text" placeholder="University or college (optional)"></div>
          <div class="form-group"><label>Qualification Obtained</label><input type="text" placeholder="e.g. Diploma in Business Studies"></div>
        </div>
        <div class="form-row full">
          <div class="form-group"><label>Year & Final Result</label><input type="text" placeholder="e.g. 2024 – Upper Second Class"></div>
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
          <div class="form-group"><label>Faculty *</label>
            <select id="sel-faculty" onchange="updatePrograms()">
              <option value="">-- Select a Faculty --</option>
              <option>Medicine & Health Sciences</option>
              <option>Engineering</option>
              <option>Business & Economics</option>
              <option>Law</option>
              <option>Computing & IT</option>
              <option>Education</option>
            </select>
          </div>
        </div>
        <div class="form-row full">
          <div class="form-group"><label>First Choice Program *</label>
            <select id="sel-program"><option value="">-- Select Faculty first --</option></select>
          </div>
        </div>
        <div class="form-row full">
          <div class="form-group"><label>Second Choice Program (optional)</label>
            <select><option value="">-- Optional alternative program --</option></select>
          </div>
        </div>
        <div class="form-row">
          <div class="form-group"><label>Intake *</label>
            <select><option>September 2025</option><option>January 2026</option></select>
          </div>
          <div class="form-group"><label>Study Mode *</label>
            <select><option>Full-time</option><option>Part-time</option><option>Distance Learning</option></select>
          </div>
        </div>
      </div>
      <div class="form-section">
        <h4>Personal Statement</h4>
        <div class="form-row full">
          <div class="form-group">
            <label>Why do you want to study this program? (min. 150 words) *</label>
            <textarea style="min-height:140px;" placeholder="Describe your motivation, relevant experience, and future goals..."></textarea>
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
      <div class="progress-bar"><div class="progress-fill" style="width:${progress}%"></div></div>
      <span class="progress-label">Step ${currentStep + 1} of ${formSteps.length}</span>
      ${currentStep > 0 ? `<button class="btn-sm btn-ghost" onclick="goToStep(${currentStep - 1})" style="margin-right:8px;">← Back</button>` : ''}
      ${currentStep < formSteps.length - 1
                    ? `<button class="btn-sm btn-navy" onclick="goToStep(${currentStep + 1})">Continue →</button>`
                    : `<button class="btn-sm btn-navy" onclick="submitApplication()" style="background:var(--success);">Submit Application</button>`
                }
    </div>
  `;
            document.querySelectorAll('.step-item').forEach((el, i) => {
                el.classList.remove('active', 'done');
                if (i < currentStep) el.classList.add('done');
                else if (i === currentStep) el.classList.add('active');
            });
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