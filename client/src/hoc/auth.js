import React from 'react';
import { auth } from '../api/client';
import { useNavigate } from 'react-router-dom';
import { useQuery } from 'react-query';
import Loading from './loading';

export default function withAuth(SpecificComponent, redirectTo = "/admin") {
    function AuthCheck() {
        const navigate = useNavigate();
        const { data, isLoading, isError } = useQuery('auth', auth,{
            retry: false, 
          });
    
        if (isLoading) {
            return <Loading />;
        }
    
        if (isError || data.response) {
            alert('로그인이 필요합니다');
            navigate(redirectTo);
            return null;
        }
    
        return <SpecificComponent />;
      }
  
    return AuthCheck;
  }

