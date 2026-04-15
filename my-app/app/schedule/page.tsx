export default function SchedulePage() {
  return (
    <div className="p-10 min-h-screen bg-yellow-200">
      <h1 className="text-4xl font-bold mb-6 text-violet-900">Conference Schedule</h1>

      <div className="bg-yellow-100 p-4 rounded-md mb-6 border border-yellow-400">
        <p className="font-semibold text-violet-900">
          Below is the official schedule for the ISMP SEA Conference. 
        </p>
      </div>
      <iframe
        src="https://docs.google.com/spreadsheets/d/e/2PACX-1vTafSKFIFA9hPLzi1PLqoztYg6rV4OrrnPL05AIp4Tbw2-SKD6Lh_Jci7stT-jMi0C9JbTGKuJdDOm7/pubhtml?gid=0&single=true"
        width="100%"
        height="600"
        className="border-none"
      ></iframe>
    </div>
  );
}