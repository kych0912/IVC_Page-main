import React from 'react';
import { auth } from '../api/client';
import { useNavigate } from 'react-router-dom';
import { useQuery, useQueryClient } from 'react-query';
import Loading from './loading';

    //null    =>  아무나 출입이 가능한 페이지
    //true    =>  로그인한 유저만 출입이 가능한 페이지
    //false   =>  로그인한 유저는 출입 불가능한 페이지


export default function withAuth(SpecificComponent,option=null, redirectTo = "/admin/login") {
    function AuthCheck() {
      const queryClient = useQueryClient();
        const navigate = useNavigate();
        const { data, isLoading, isError } = useQuery('auth', auth,{
            retry: 1, 
            retryDelay: 1000,
            staleTime: 10000,
            refetchOnWindowFocus:false
          });
          console.log(data);

          queryClient.removeQueries({queryKey:'auth'});
    
        if (isLoading) {
            return <Loading />;
        }

        if (isError || data.response) {
            if(option){
              alert('로그인이 필요합니다');
              navigate(redirectTo);
            }
          }
          else{
            if(option!==null){
              if(!option){
                  navigate(redirectTo);
              }
          }
        }
        
        return <SpecificComponent />;
      }
  
    return AuthCheck;
  }

