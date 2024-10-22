export default async function(){
  await new Promise((resolve) => {
    setTimeout(resolve,3000)
  })
    return (
      <div className="pl-3">
        <h1 className="text-2xl font-semibold mt-5">My Introduction</h1>
        <p className="mt-3 ">My name is Rubab, and I have a strong passion for web development. I am proficient in Next.js, TypeScript, CSS, and HTML, which allows me to create attractive and responsive websites. Additionally, I have good skills in MS Office, helping me prepare documents and presentations effectively. Along with my technical skills, I possess strong problem-solving abilities.
           I am always eager to learn new skills to advance in my career.</p>
      </div>
    );
  }