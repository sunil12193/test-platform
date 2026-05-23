import react from "react";


export default function ActivityLogsPage() {
    return (
        <div className="p-6">
            <h1 className="text-3xl font-bold mb-4">Activity Logs</h1>
            <p className="text-gray-600 mb-6">View and manage your platform activities.</p>
        
            <div className="bg-white p-4 rounded-lg shadow-md">
                <h2 className="text-xl font-semibold mb-3">Contact Support</h2>
                <p className="text-gray-500 mb-2">Reach out to our support team for assistance with any issues or questions you may have.</p>
                {/* Contact support form or information goes here */}
            </div>

            <div className="bg-white p-4 rounded-lg shadow-md mt-6">
                <h2 className="text-xl font-semibold mb-3">FAQs</h2>
                <p className="text-gray-500 mb-2">Find answers to common questions and issues in our Frequently Asked Questions section.</p>
                {/* FAQs content goes here */}
            </div>

            <div className="bg-white p-4 rounded-lg shadow-md mt-6">
                <h2 className="text-xl font-semibold mb-3">Live Chat</h2>
                <p className="text-gray-500 mb-2">Chat with our support team in real-time for immediate assistance.</p>
                {/* Live chat feature or information goes here */}
            </div>
        </div>
    );
}