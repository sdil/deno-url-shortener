interface AuthData {
  username: string;
  loggedIn: boolean;
}

interface Props {
  auth: AuthData;
}

export default function UserInfo({ auth }: Props) {
  return (
    <div>
      <div class="font-semibold text-sm">
        <span class="mr-4">
          Logged in as {auth.username}
        </span>
        <button
          onClick={() => window.location.href = "/api/logout"}
          class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center"
        >
          Logout
        </button>
      </div>
    </div>
  );
}
