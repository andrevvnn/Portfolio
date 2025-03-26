import React from 'react';
import { MailIcon, PhoneIcon, MapPinIcon } from 'lucide-react';
export function ContactSection() {
  return <section id="contact" className="py-24 bg-gray-900">
      <div className="container mx-auto px-6">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Get In Touch
          </h2>
          <p className="text-gray-400 text-lg">
            Interested in working together? Let's discuss your architectural
            vision and bring your ideas to life.
          </p>
        </div>
        <div className="max-w-4xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-gray-800 p-8 rounded-lg">
              <h3 className="text-xl font-bold text-white mb-6">
                Contact Information
              </h3>
              <div className="space-y-6">
                {[{
                Icon: MailIcon,
                title: 'Email',
                content: 'studio@archstudio.com'
              }, {
                Icon: PhoneIcon,
                title: 'Phone',
                content: '+1 (123) 456-7890'
              }, {
                Icon: MapPinIcon,
                title: 'Location',
                content: 'New York, NY, United States'
              }].map(({
                Icon,
                title,
                content
              }) => <div key={title} className="flex items-start">
                    <Icon className="w-5 h-5 text-gray-400 mt-1 mr-4" />
                    <div>
                      <p className="font-medium text-white">{title}</p>
                      <p className="text-gray-400">{content}</p>
                    </div>
                  </div>)}
              </div>
            </div>
            <div className="bg-gray-800 p-8 rounded-lg">
              <h3 className="text-xl font-bold text-white mb-6">
                Send a Message
              </h3>
              <form className="space-y-6">
                {['Name', 'Email', 'Message'].map(field => <div key={field}>
                    <label htmlFor={field.toLowerCase()} className="block text-sm font-medium text-gray-300 mb-2">
                      {field}
                    </label>
                    {field === 'Message' ? <textarea id={field.toLowerCase()} rows={4} className="w-full px-4 py-3 bg-gray-900 border border-gray-700 rounded-lg text-gray-300 focus:outline-none focus:border-gray-600" placeholder={`Your ${field.toLowerCase()}`} /> : <input type={field.toLowerCase() === 'email' ? 'email' : 'text'} id={field.toLowerCase()} className="w-full px-4 py-3 bg-gray-900 border border-gray-700 rounded-lg text-gray-300 focus:outline-none focus:border-gray-600" placeholder={`Your ${field.toLowerCase()}`} />}
                  </div>)}
                <button type="submit" className="w-full bg-white text-gray-900 py-3 px-6 rounded-lg font-medium hover:bg-gray-100 transition-colors">
                  Send Message
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>;
}