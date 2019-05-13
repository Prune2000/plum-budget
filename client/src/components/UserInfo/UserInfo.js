import React from 'react';
import { connect } from 'react-redux';


const UserInfo = (props) => (
          <div className="user-info">
            <p>Welcome {props.user.username}!</p>
          </div>
      );

const mapStateToProps = (state) => {
  return {
    user: state.user
  };
}
     
export default connect(mapStateToProps)(UserInfo);