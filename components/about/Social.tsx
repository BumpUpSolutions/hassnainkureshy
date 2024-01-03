import Link from "next/link";

export const Social = () => {
  const handleDownloadClick = () => {
    const link = document.createElement('a');
    link.href = '/resume/HassnainKureshy-Resume.pdf';
    link.download = 'Hassnain Kureshy - Resume';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <div className="flex justify-between items-center py-2 lg:px-24 md:px-16 px-2">
      <div className="flex items-center space-x-4">
        <Link href="https://www.linkedin.com/in/hkureshy" target="_blank" rel="noopener noreferrer">
          <i className="devicon-linkedin-plain colored text-2xl"></i>
        </Link>
        <Link href="https://github.com/hkureshy" target="_blank" rel="noopener noreferrer">
          <i className="devicon-github-original colored text-2xl"></i>
        </Link>
        <Link href="https://www.npmjs.com/~hkureshy" target="_blank" rel="noopener noreferrer">
          <i className="devicon-npm-original-wordmark colored text-2xl"></i>
        </Link>
      </div>

      <div>
        <button onClick={handleDownloadClick} className="bg-orange-500 text-white font-bold py-2 px-4 rounded">
          Download Resume
        </button>
      </div>
    </div>
  );
};
