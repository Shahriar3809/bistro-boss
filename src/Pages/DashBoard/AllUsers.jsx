import { useQuery } from "@tanstack/react-query";
import useAxiosSecure from "../../Hooks/useAxiosSecure";
import { MdDelete } from "react-icons/md";
import { FaUsersCog } from "react-icons/fa";
import Swal from "sweetalert2";
import { toast } from "react-toastify";



const AllUsers = () => {
    const axiosSecure = useAxiosSecure();
    const {data: users = [], refetch} = useQuery({
        queryKey: ['users'],
        queryFn: async()=> {
            const res = await axiosSecure.get("/users");
            return res.data;
        }
    })

    const handleDelete = (_id) => {
        Swal.fire({
          title: "Are you sure?",
          text: "You won't be able to revert this!",
          icon: "warning",
          showCancelButton: true,
          confirmButtonColor: "#3085d6",
          cancelButtonColor: "#d33",
          confirmButtonText: "Yes, delete it!",
        }).then((result) => {
          if (result.isConfirmed) {
            axiosSecure.delete(`/users/${_id}`).then((res) => {
              if (res.data.deletedCount > 0) {
                refetch();
                Swal.fire({
                  title: "Deleted!",
                  text: "Your file has been deleted.",
                  icon: "success",
                });
              }
            });
          }
        });
    }
    const handleMakeAdmin = (_id) => {
      axiosSecure.patch(`/users/admin/${_id}`)
      .then(res=> {
        console.log(res.data)
        if (res.data.modifiedCount > 0) {
          toast.success("Role change to Admin!");
        }
      })
    };

    return (
      <div>
        <div className="flex justify-between">
          <h2 className="text-3xl">All User: {users.length}</h2>
          <h2 className="text-3xl">Total User: {}</h2>
        </div>
        <div>
          <div className="overflow-x-auto">
            <table className="table table-zebra">
              {/* head */}
              <thead>
                <tr>
                  <th>Serial</th>
                  <th>Name</th>
                  <th>Email</th>
                  <th>Role</th>
                  <th>Action</th>
                </tr>
              </thead>
              <tbody>
                {/* row 1 */}
                {users.map((user, index) => (
                  <tr key={index}>
                    <th>{index + 1}</th>
                    <td>{user.name}</td>
                    <td>{user.email}</td>
                    <td>
                      {" "}
                      {user.role === "admin" ? (
                        "Admin"
                      ) : (
                        <>
                          <FaUsersCog
                            onClick={() => handleMakeAdmin(user._id)}
                            className="text-2xl text-orange-600 text-center cursor-pointer"
                          />
                        </>
                      )}
                    </td>
                    <td>
                      <MdDelete
                        onClick={() => handleDelete(user._id)}
                        className="text-2xl text-orange-600 text-center cursor-pointer"
                      />
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    );
};

export default AllUsers;