import { useState } from 'react';
import { useAuth } from '../contexts/AuthContext';
import './UserProfile.css';

function UserProfile() {
  const { currentUser, signOut } = useAuth();
  const [showDropdown, setShowDropdown] = useState(false);

  const handleSignOut = async () => {
    try {
      await signOut();
    } catch (err) {
      console.error('Failed to sign out:', err);
    }
  };

  return (
    <div className="user-profile">
      <button
        className="profile-button"
        onClick={() => setShowDropdown(!showDropdown)}
      >
        {currentUser?.photoURL ? (
          <img
            src={currentUser.photoURL}
            alt={currentUser.displayName || 'User'}
            className="profile-avatar"
          />
        ) : (
          <div className="profile-avatar-placeholder">
            {currentUser?.displayName?.[0] || currentUser?.email?.[0] || 'U'}
          </div>
        )}
      </button>

      {showDropdown && (
        <div className="profile-dropdown">
          <div className="profile-info">
            <p className="profile-name">{currentUser?.displayName || 'User'}</p>
            <p className="profile-email">{currentUser?.email}</p>
          </div>
          <button className="sign-out-btn" onClick={handleSignOut}>
            Sign Out
          </button>
        </div>
      )}
    </div>
  );
}

export default UserProfile;
