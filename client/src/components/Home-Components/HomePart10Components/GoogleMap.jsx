const GoogleMap = () => {
  return (
    <div className="w-full lg:w-1/2">
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3504.1962253420647!2d77.2181592!3d28.5638698!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390ce2428ee46e1d%3A0x60ddc77480061d3a!2sSarvodaya%20Co-Ed%20Senior%20Secondary%20School%2C%20Masjid%20Moth!5e0!3m2!1sen!2sin!4v1744290484347!5m2!1sen!2sin"
        className="w-full h-[300px] sm:h-[400px] lg:h-[500px]"
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
        title="Google Maps - Lila Ram Market, New Delhi"
      ></iframe>
    </div>
  );
};

export default GoogleMap;
