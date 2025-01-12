const GoogleMap = () => {
  return (
    <div className="w-full lg:w-1/2">
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3504.0737082322676!2d77.32358577547092!3d28.567549287028783!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390ce437992ea39f%3A0xa26bb41d89eacf5b!2sWorlds%20of%20Wonder!5e0!3m2!1sen!2sin!4v1736228123710!5m2!1sen!2sin"
        className="w-full h-[300px] sm:h-[400px] lg:h-[500px]"
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
      ></iframe>
    </div>
  );
};
export default GoogleMap;

