import React from 'react';

export default props => {
  return (
    <div>
      <div className="col-md-12 col-xs-12">
        <RoundButton
          text={following ? 'Unfollow' : 'Follow'}
          onClick={following ? setUnfollow : setFollow}
          param={userId}
          btnClass={following ? 'danger' : 'success'}
        />
      </div>
    </div>
  );
};
