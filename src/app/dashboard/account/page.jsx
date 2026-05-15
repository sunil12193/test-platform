import react from "react";

export default function AccountPage() {
    return (
        <div className="p-6">
            <h1 className="text-3xl font-bold mb-4">Account Settings</h1>
            <p className="text-gray-600 mb-6">Manage your account information and preferences.</p>

            <div className="bg-white p-4 rounded-lg shadow-md">
                <h2 className="text-xl font-semibold mb-3">Profile Information</h2>
                <p className="text-gray-500 mb-2">Update your personal details.</p>
                {/* Profile form goes here */}
            </div>

            <div className="bg-white p-4 rounded-lg shadow-md mt-6">
                <h2 className="text-xl font-semibold mb-3">Security Settings</h2>
                <p className="text-gray-500 mb-2">Change your password and enable two-factor authentication.</p>
                {/* Security settings form goes here */}
            </div>

            <div className="bg-white p-4 rounded-lg shadow-md mt-6">
                <h2 className="text-xl font-semibold mb-3">Notification Preferences</h2>
                <p className="text-gray-500 mb-2">Manage your email and push notification settings.</p>
                {/* Notification preferences form goes here */}
            </div>
        </div>
    );
}   
