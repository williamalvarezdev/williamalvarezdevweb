import Image from "next/image";
import { socialLinks } from "./config";

export default function Page() {
  return (
    <section>
      <a href={socialLinks.linkedin} target="_blank">
        <Image
          src="/william.jpg"
          alt="Profile photo"
          className="rounded-full bg-gray-100 block lg:mt-5 mt-0 lg:mb-5 mb-10 mx-auto sm:float-right sm:ml-5 sm:mb-5 grayscale hover:grayscale-0"
          unoptimized
          width={160}
          height={160}
          priority
        />
      </a>
      <h1 className="mb-8 text-2xl font-medium tracking-tight">
        DevOps Engineer
      </h1>
      <div className="prose prose-neutral dark:prose-invert">
      <p>
  A passionate DevOps engineer with a strong background in software development,
  specializing in cloud infrastructure, automation, and continuous integration.
</p>
<p>
  William Alvarez has worked with tools like AWS, Kubernetes, Terraform, and GitLab to build scalable,
  high-performance systems. Focused on optimizing tech operations, I’m constantly learning and exploring
  new technologies.
</p>
<p> 
  I'm also exploring new ventures, with a goal to create innovative solutions that make a lasting impact.
</p>
<p>
  Connect with me on <a href={socialLinks.linkedin} target="_blank">LinkedIn</a> or check out my <a href={socialLinks.github} target="_blank">GitHub</a>.
</p>
      </div>
    </section>
  );
}
