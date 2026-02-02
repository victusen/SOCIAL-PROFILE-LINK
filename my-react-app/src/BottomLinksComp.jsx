import './App.css';

function BottomLinksComp() {

  const accounts = ["Facebook", "LinkedIn", "X", "IG", "Github", "My Portfolio"];

  const links = [ 
    "https://www.facebook.com/profile.php?id=61562599393792", 
    "https://www.linkedin.com/in/victor-usen-81a5a63a4", 
    "https://x.com/__victorusen", 
    "https://www.instagram.com/victorusen1",  "https://github.com/victusen" 
  ];

  return (
    <div className="custom-scrollbar h-68 text-center flex flex-col gap-3.5 w-full rounded-md box-border">
      {accounts.map((link, index) => (
        <a 
          key={index} href={links[index]} 
          className="py-2.5 rounded-md select-none"
          target="_blank" rel="noopener noreferrer"
        >
          {link}
        </a>
      ))}
    </div>
  );
}

export default BottomLinksComp;