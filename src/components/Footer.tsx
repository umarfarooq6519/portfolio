export default function Footer() {
  return (
    <section className="section-footer w-full tracking-normal flex flex-col gap-6 items-center text-base faded justify-center py-10">
      <ul className="menu-items text-base tracking-wide flex gap-2 sm:gap-6">
        <li>About</li>/<li>Projects</li>/<li>Contact</li>
      </ul>
      <p>
        Copyright<i className="fa-regular fa-copyright fa-sm px-1.5"></i>2023
        Umar Farooq. All Rights Reserved.
      </p>
    </section>
  );
}
