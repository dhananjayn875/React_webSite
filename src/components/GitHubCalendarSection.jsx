import { GitHubCalendar } from 'react-github-calendar';

export default function GitHubCalendarSection() {
  return (
    <section className="py-16 px-4">
      <h2 className="text-3xl font-bold text-center mb-8">GitHub Activity</h2>
      <div className="flex justify-center">
        <GitHubCalendar username="dhananjayn875" colorScheme="dark" />
      </div>
    </section>
  );
}
