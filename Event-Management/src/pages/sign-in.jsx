import React, { useState } from 'react';
import '../css/signIn.css';

const SignIn = () => {
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    phone: '',
    userType: '',
    department: '',
    yearOfStudy: '',
    selectedEvents: [],
    dietaryRestrictions: '',
    emergencyContact: '',
    emergencyPhone: '',
    additionalComments: ''
  });

  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);

  const departments = [
    'Computer Science & Engineering',
    'Electronics & Communication',
    'Mechanical Engineering',
    'Civil Engineering',
    'Electrical Engineering',
    'Information Technology',
    'Business Administration',
    'Arts & Sciences',
    'Other'
  ];

  const events = [
    'Tech Fest 2024',
    'Cultural Night',
    'Sports Tournament',
    'Academic Conference',
    'Alumni Meet',
    'Career Fair',
    'Innovation Summit',
    'Art Exhibition'
  ];

  const validateForm = () => {
    const newErrors = {};

    if (!formData.fullName.trim()) {
      newErrors.fullName = 'Full name is required';
    }

    if (!formData.email.trim()) {
      newErrors.email = 'Email is required';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = 'Please enter a valid email address';
    }

    if (!formData.phone.trim()) {
      newErrors.phone = 'Phone number is required';
    } else if (!/^\d{10}$/.test(formData.phone.replace(/\D/g, ''))) {
      newErrors.phone = 'Please enter a valid 10-digit phone number';
    }

    if (!formData.userType) {
      newErrors.userType = 'Please select your user type';
    }

    if (!formData.department) {
      newErrors.department = 'Please select your department';
    }

    if (formData.userType === 'student' && !formData.yearOfStudy) {
      newErrors.yearOfStudy = 'Year of study is required for students';
    }

    if (formData.selectedEvents.length === 0) {
      newErrors.selectedEvents = 'Please select at least one event';
    }

    if (!formData.emergencyContact.trim()) {
      newErrors.emergencyContact = 'Emergency contact name is required';
    }

    if (!formData.emergencyPhone.trim()) {
      newErrors.emergencyPhone = 'Emergency contact phone is required';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!validateForm()) {
      return;
    }

    setIsSubmitting(true);

    await new Promise(resolve => setTimeout(resolve, 2000));

    alert('Registration submitted successfully! You will receive a confirmation email shortly.');

    setFormData({
      fullName: '',
      email: '',
      phone: '',
      userType: '',
      department: '',
      yearOfStudy: '',
      selectedEvents: [],
      dietaryRestrictions: '',
      emergencyContact: '',
      emergencyPhone: '',
      additionalComments: ''
    });

    setIsSubmitting(false);
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleEventChange = (eventName, checked) => {
    setFormData(prev => ({
      ...prev,
      selectedEvents: checked
        ? [...prev.selectedEvents, eventName]
        : prev.selectedEvents.filter(e => e !== eventName)
    }));
  };

  return (
    <div className="registration-container">
      <div className="registration-wrapper">
        <div className="header">
          <div className="logo">
            <span className="logo-icon">🎓</span>
            <h1 className='registration-h1'>CampusConnect</h1>
          </div>
          <p className="subtitle">Event Registration Portal</p>
        </div>

        <div className="form-card">
          <div className="form-header">
            <h2>Register for Campus Events</h2>
            <p>Join us for exciting events throughout the academic year. Fill out the form below to secure your spot.</p>
          </div>

          <form onSubmit={handleSubmit} className="registration-form">
            <div className="form-section">
              <h3>👤 Personal Information</h3>
              
              <div className="form-row">
                <div className="form-group">
                  <label htmlFor="fullName">Full Name *</label>
                  <input
                    type="text"
                    id="fullName"
                    name="fullName"
                    placeholder="Enter your full name"
                    value={formData.fullName}
                    onChange={handleInputChange}
                    className={errors.fullName ? 'error' : ''}
                  />
                  {errors.fullName && <span className="error-message">{errors.fullName}</span>}
                </div>

                <div className="form-group">
                  <label htmlFor="email">Email Address *</label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    placeholder="your.email@college.edu"
                    value={formData.email}
                    onChange={handleInputChange}
                    className={errors.email ? 'error' : ''}
                  />
                  {errors.email && <span className="error-message">{errors.email}</span>}
                </div>
              </div>

              <div className="form-group">
                <label htmlFor="phone">Phone Number *</label>
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  placeholder="(555) 123-4567"
                  value={formData.phone}
                  onChange={handleInputChange}
                  className={errors.phone ? 'error' : ''}
                />
                {errors.phone && <span className="error-message">{errors.phone}</span>}
              </div>
            </div>

            <div className="form-section">
              <h3>📚 Academic Information</h3>

              <div className="form-group">
                <label>User Type *</label>
                <div className="radio-group">
                  <label className="radio-option">
                    <input
                      type="radio"
                      name="userType"
                      value="student"
                      checked={formData.userType === 'student'}
                      onChange={handleInputChange}
                    />
                    Student
                  </label>
                  <label className="radio-option">
                    <input
                      type="radio"
                      name="userType"
                      value="faculty"
                      checked={formData.userType === 'faculty'}
                      onChange={handleInputChange}
                    />
                    Faculty
                  </label>
                  <label className="radio-option">
                    <input
                      type="radio"
                      name="userType"
                      value="guest"
                      checked={formData.userType === 'guest'}
                      onChange={handleInputChange}
                    />
                    Guest
                  </label>
                </div>
                {errors.userType && <span className="error-message">{errors.userType}</span>}
              </div>

              <div className="form-row">
                <div className="form-group">
                  <label htmlFor="department">Department *</label>
                  <select
                    id="department"
                    name="department"
                    value={formData.department}
                    onChange={handleInputChange}
                    className={errors.department ? 'error' : ''}
                  >
                    <option value="">Select your department</option>
                    {departments.map(dept => (
                      <option key={dept} value={dept}>{dept}</option>
                    ))}
                  </select>
                  {errors.department && <span className="error-message">{errors.department}</span>}
                </div>

                {formData.userType === 'student' && (
                  <div className="form-group">
                    <label htmlFor="yearOfStudy">Year of Study *</label>
                    <select
                      id="yearOfStudy"
                      name="yearOfStudy"
                      value={formData.yearOfStudy}
                      onChange={handleInputChange}
                      className={errors.yearOfStudy ? 'error' : ''}
                    >
                      <option value="">Select year</option>
                      <option value="1st">1st Year</option>
                      <option value="2nd">2nd Year</option>
                      <option value="3rd">3rd Year</option>
                      <option value="4th">4th Year</option>
                      <option value="graduate">Graduate</option>
                    </select>
                    {errors.yearOfStudy && <span className="error-message">{errors.yearOfStudy}</span>}
                  </div>
                )}
              </div>
            </div>

            <div className="form-section">
              <h3>📅 Event Selection</h3>
              
              <div className="form-group">
                <label>Select Events to Attend *</label>
                <div className="checkbox-grid">
                  {events.map(event => (
                    <label key={event} className="checkbox-option">
                      <input
                        type="checkbox"
                        checked={formData.selectedEvents.includes(event)}
                        onChange={(e) => handleEventChange(event, e.target.checked)}
                      />
                      {event}
                    </label>
                  ))}
                </div>
                {errors.selectedEvents && <span className="error-message">{errors.selectedEvents}</span>}
              </div>
            </div>

            <div className="form-section">
              <h3>ℹ Additional Information</h3>

              <div className="form-group">
                <label htmlFor="dietaryRestrictions">Dietary Restrictions</label>
                <input
                  type="text"
                  id="dietaryRestrictions"
                  name="dietaryRestrictions"
                  placeholder="Any food allergies or dietary preferences"
                  value={formData.dietaryRestrictions}
                  onChange={handleInputChange}
                />
              </div>

              <div className="form-row">
                <div className="form-group">
                  <label htmlFor="emergencyContact">Emergency Contact Name *</label>
                  <input
                    type="text"
                    id="emergencyContact"
                    name="emergencyContact"
                    placeholder="Contact person name"
                    value={formData.emergencyContact}
                    onChange={handleInputChange}
                    className={errors.emergencyContact ? 'error' : ''}
                  />
                  {errors.emergencyContact && <span className="error-message">{errors.emergencyContact}</span>}
                </div>

                <div className="form-group">
                  <label htmlFor="emergencyPhone">Emergency Contact Phone *</label>
                  <input
                    type="tel"
                    id="emergencyPhone"
                    name="emergencyPhone"
                    placeholder="Emergency contact number"
                    value={formData.emergencyPhone}
                    onChange={handleInputChange}
                    className={errors.emergencyPhone ? 'error' : ''}
                  />
                  {errors.emergencyPhone && <span className="error-message">{errors.emergencyPhone}</span>}
                </div>
              </div>

              <div className="form-group">
                <label htmlFor="additionalComments">Additional Comments</label>
                <textarea
                  id="additionalComments"
                  name="additionalComments"
                  placeholder="Any special requirements or additional information"
                  value={formData.additionalComments}
                  onChange={handleInputChange}
                  rows="3"
                />
              </div>
            </div>

            <button 
              type="submit" 
              className="submit-button"
              disabled={isSubmitting}
            >
              {isSubmitting ? 'Submitting Registration...' : 'Register for Events'}
            </button>
          </form>
        </div>
  
      </div>
    </div>
  );
};

export default SignIn;



