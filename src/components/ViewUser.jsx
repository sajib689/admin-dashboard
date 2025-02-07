import { useLoaderData } from "react-router-dom";

const ViewUser = () => {
    const user = useLoaderData();

    return (
        <div className="max-w-5xl mx-auto p-8 bg-white shadow-lg rounded-xl mt-8">
            

            {/* User Information Form */}
            <div className="mb-8">
                <h3 className="text-2xl font-semibold text-gray-800 mb-4">Personal Information</h3>
                <form className="space-y-6 text-lg text-gray-700">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div>
                            <label className="block text-sm font-medium text-gray-600">ID</label>
                            <input type="text" value={user.id} readOnly className="w-full mt-1 px-4 py-2 bg-gray-100 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-500" />
                        </div>
                        <div>
                            <label className="block text-sm font-medium text-gray-600">Name</label>
                            <input type="text" value={user.name} readOnly className="w-full mt-1 px-4 py-2 bg-gray-100 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-500" />
                        </div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div>
                            <label className="block text-sm font-medium text-gray-600">Username</label>
                            <input type="text" value={user.username} readOnly className="w-full mt-1 px-4 py-2 bg-gray-100 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-500" />
                        </div>
                        <div>
                            <label className="block text-sm font-medium text-gray-600">Email</label>
                            <input type="email" value={user.email} readOnly className="w-full mt-1 px-4 py-2 bg-gray-100 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-500" />
                        </div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div>
                            <label className="block text-sm font-medium text-gray-600">Phone</label>
                            <input type="text" value={user.phone} readOnly className="w-full mt-1 px-4 py-2 bg-gray-100 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-500" />
                        </div>
                        <div>
                        <label className="block text-sm font-medium text-gray-600">Website Address</label>
                            <input type="text" value={user.website} readOnly className="w-full mt-1 px-4 py-2 bg-gray-100 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-500" />
                        
                            
                        </div>
                    </div>
                </form>
            </div>

            {/* Address Information Form */}
            <div className="mb-8">
                <h3 className="text-2xl font-semibold text-gray-800 mb-4">Address</h3>
                <form className="space-y-6 text-lg text-gray-700">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div>
                            <label className="block text-sm font-medium text-gray-600">Street</label>
                            <input type="text" value={user.address.street} readOnly className="w-full mt-1 px-4 py-2 bg-gray-100 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-500" />
                        </div>
                        <div>
                            <label className="block text-sm font-medium text-gray-600">Suite</label>
                            <input type="text" value={user.address.suite} readOnly className="w-full mt-1 px-4 py-2 bg-gray-100 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-500" />
                        </div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div>
                            <label className="block text-sm font-medium text-gray-600">City</label>
                            <input type="text" value={user.address.city} readOnly className="w-full mt-1 px-4 py-2 bg-gray-100 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-500" />
                        </div>
                        <div>
                            <label className="block text-sm font-medium text-gray-600">Zipcode</label>
                            <input type="text" value={user.address.zipcode} readOnly className="w-full mt-1 px-4 py-2 bg-gray-100 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-500" />
                        </div>
                    </div>

                    <div>
                        <label className="block text-sm font-medium text-gray-600">Geo Coordinates</label>
                        <input type="text" value={`Lat: ${user.address.geo.lat}, Lng: ${user.address.geo.lng}`} readOnly className="w-full mt-1 px-4 py-2 bg-gray-100 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-500" />
                    </div>
                </form>
            </div>

            {/* Company Information Form */}
            <div>
                <h3 className="text-2xl font-semibold text-gray-800 mb-4">Company</h3>
                <form className="space-y-6 text-lg text-gray-700">
                    <div>
                        <label className="block text-sm font-medium text-gray-600">Name</label>
                        <input type="text" value={user.company.name} readOnly className="w-full mt-1 px-4 py-2 bg-gray-100 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-500" />
                    </div>
                    <div>
                        <label className="block text-sm font-medium text-gray-600">Catchphrase</label>
                        <input type="text" value={user.company.catchPhrase} readOnly className="w-full mt-1 px-4 py-2 bg-gray-100 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-500" />
                    </div>
                    <div>
                        <label className="block text-sm font-medium text-gray-600">BS</label>
                        <input type="text" value={user.company.bs} readOnly className="w-full mt-1 px-4 py-2 bg-gray-100 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-500" />
                    </div>
                </form>
            </div>
        </div>
    );
};

export default ViewUser;
