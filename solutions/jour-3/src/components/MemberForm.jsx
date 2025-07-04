import { useState } from 'react';
import { UserPlus, User, Code, MessageCircle, Image } from 'lucide-react';

export function MemberForm({ onAddMember }) {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    tech: '',
    message: '',
    imageUrl: ''
  });
  
  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);

  const validateForm = () => {
    const newErrors = {};
    
    if (!formData.firstName.trim()) {
      newErrors.firstName = 'Le prénom est requis';
    }
    
    if (!formData.lastName.trim()) {
      newErrors.lastName = 'Le nom est requis';
    }
    
    if (!formData.tech.trim()) {
      newErrors.tech = 'La technologie est requise';
    }
    
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    if (!validateForm()) return;
    
    setIsSubmitting(true);
    
    // Simulation d'un délai pour l'expérience utilisateur
    await new Promise(resolve => setTimeout(resolve, 800));
    
    onAddMember({
      firstName: formData.firstName.trim(),
      lastName: formData.lastName.trim(),
      tech: formData.tech.trim(),
      message: formData.message.trim(),
      imageUrl: formData.imageUrl.trim()
    });
    
    setFormData({
      firstName: '',
      lastName: '',
      tech: '',
      message: '',
      imageUrl: ''
    });
    
    setErrors({});
    setIsSubmitting(false);
    
    const firstInput = document.querySelector('input[name="firstName"]');
    firstInput?.focus();
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
    
    // Effacer l'erreur dès que l'utilisateur commence à taper
    if (errors[name]) {
      setErrors(prev => ({ ...prev, [name]: '' }));
    }
  };

  return (
    <div className="bg-white rounded-xl shadow-lg border border-gray-100 p-8">
      <div className="flex items-center mb-6">
        <h2 className="text-2xl font-bold text-gray-900">Ajouter un nouveau membre</h2>
      </div>
      
      <form onSubmit={handleSubmit} className="space-y-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <label htmlFor="firstName" className="block text-sm font-medium text-gray-700 mb-2">
              Prénom *
            </label>
            <input
              type="text"
              id="firstName"
              name="firstName"
              value={formData.firstName}
              onChange={handleChange}
              className={`w-full px-4 py-3 rounded-lg border transition-colors duration-200 focus:ring-2 focus:ring-blue-500 focus:border-transparent ${
                errors.firstName ? 'border-red-500 bg-red-50' : 'border-gray-300 hover:border-gray-400'
              }`}
              placeholder="Entrez le prénom"
            />
            {errors.firstName && <p className="mt-1 text-sm text-red-600">{errors.firstName}</p>}
          </div>
          
          <div>
            <label htmlFor="lastName" className="block text-sm font-medium text-gray-700 mb-2">
              Nom *
            </label>
            <input
              type="text"
              id="lastName"
              name="lastName"
              value={formData.lastName}
              onChange={handleChange}
              className={`w-full px-4 py-3 rounded-lg border transition-colors duration-200 focus:ring-2 focus:ring-blue-500 focus:border-transparent ${
                errors.lastName ? 'border-red-500 bg-red-50' : 'border-gray-300 hover:border-gray-400'
              }`}
              placeholder="Entrez le nom"
            />
            {errors.lastName && <p className="mt-1 text-sm text-red-600">{errors.lastName}</p>}
          </div>
        </div>
        
        <div>
          <label htmlFor="tech" className="block text-sm font-medium text-gray-700 mb-2">
            Technologie *
          </label>
          <input
            type="text"
            id="tech"
            name="tech"
            value={formData.tech}
            onChange={handleChange}
            className={`w-full px-4 py-3 rounded-lg border transition-colors duration-200 focus:ring-2 focus:ring-blue-500 focus:border-transparent ${
              errors.tech ? 'border-red-500 bg-red-50' : 'border-gray-300 hover:border-gray-400'
            }`}
            placeholder="Ex: React, Python, Java..."
          />
          {errors.tech && <p className="mt-1 text-sm text-red-600">{errors.tech}</p>}
        </div>
        
        <div>
          <label htmlFor="imageUrl" className="block text-sm font-medium text-gray-700 mb-2">
            URL de l'image (optionnel)
          </label>
          <input
            type="url"
            id="imageUrl"
            name="imageUrl"
            value={formData.imageUrl}
            onChange={handleChange}
            className="w-full px-4 py-3 rounded-lg border border-gray-300 hover:border-gray-400 transition-colors duration-200 focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            placeholder="https://exemple.com/photo.jpg"
          />
        </div>
        
        <div>
          <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
            Message personnel (optionnel)
          </label>
          <textarea
            id="message"
            name="message"
            value={formData.message}
            onChange={handleChange}
            rows={3}
            className="w-full px-4 py-3 rounded-lg border border-gray-300 hover:border-gray-400 transition-colors duration-200 focus:ring-2 focus:ring-blue-500 focus:border-transparent resize-none"
            placeholder="Présentez-vous en quelques mots..."
          />
        </div>
        
        <button
          type="submit"
          disabled={isSubmitting}
          className="w-full bg-gradient-to-r from-blue-600 to-blue-700 text-white py-3 px-6 rounded-lg font-medium hover:from-blue-700 hover:to-blue-800 transition-all duration-200 transform hover:scale-[1.02] focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 disabled:opacity-50 disabled:cursor-not-allowed disabled:transform-none"
        >
          {isSubmitting ? 'Ajout en cours...' : 'Ajouter le membre'}
        </button>
      </form>
    </div>
  );
}