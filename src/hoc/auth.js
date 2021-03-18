import React, { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { withRouter } from 'react-router-dom';

export default function Auth(SpecificComponent, option, adminRoute = null) {
    //option
        //null => 아무나 출입 가능한 페이지
        //true => 로그인한 유저만 출입 가능한 페이지
        //false => 로그인한 유저는 출입 불가능한 페이지
        //adminRoute 파라미터는 admin만 출입가능하게하려면 true를 넣으면됨

    function AuthenticationCheck(props) {
        const { jwt } = useSelector(state => state.auth);
        const creatorId = useSelector(state => state.boards.studentId);
        const userId = useSelector(state => state.auth.user.id);

        useEffect(() => {
            //로그인하지 않은 상태
            if (!jwt) {
                if (option === true) {
                    setTimeout(() => {
                        props.history.push('/login');
                    }, 100)
                } 
            } else {
            //로그인한 상태
                if (option === false) props.history.push('/');
            }

            if(option === 'update') {
                if(creatorId !== userId) {
                    setTimeout(() => {
                        props.history.push('/');
                    }, 100)
                }
            }
        }, [jwt]);

        return (
            <SpecificComponent></SpecificComponent>
        )
    }

    return withRouter(AuthenticationCheck);
}