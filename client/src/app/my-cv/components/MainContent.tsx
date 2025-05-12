import Education from './Education';
import PersonalProjects from './PersonalProjects';
import WorkExperience from './WorkExperience/WorkExperience';

export default function MainContent() {
  return (
    <main className="p-6 lg:w-2/3">
      <WorkExperience />
      <Education />
      <PersonalProjects />
    </main>
  );
}
