import React, { useEffect, useState } from 'react';
import Button from '../../core/components/Button';
import { GitHubUser } from '../../core/types/GithubUser';
import { request } from '../../core/utils/request';
import ImageLoader from './Loader/ImageLoader';
import InfoLoader from './Loader/InfoLoader';
import './styles.css';

type Form = {
    user: string;
}

const Search = () => {

    const [form, setForm] = useState<Form>({ user: '' });
    const [githubUser, setGithubUser] = useState<GitHubUser>();
    const [isLoading, setIsLoading] = useState(false);
    const [isLoad, setIsLoad] = useState(false);


    const handleOnChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const name = e.target.name;
        const value = e.target.value;

        setForm(data => ({ ...data, [name]: value }));
    }

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        setIsLoading(true);
        request({ url: `/${form.user}` })
            .then(res => setGithubUser(res.data))
            .finally(() => setIsLoading(false)).finally(() => setIsLoad(true));
        console.log(githubUser);
    }

    return (
        <>
            <form onSubmit={handleSubmit}>
                <div className="box-search">
                    <h1 className="title">Encontre um perfil Github</h1>
                    <input type="text" name="user" className="form" onChange={handleOnChange} placeholder="Usuário Github" /> <br />
                    <Button texto="Encontrar" />
                </div>
            </form>

            {isLoading ?<div className="result-search">
                            <div className="">
                                <ImageLoader/>
                                <div className="card-white-load">
                                    <div className="infos-first">
                                           <InfoLoader/>
                                    </div>
                                </div>
                            </div>  
                        </div>
             : (<div></div>)}

             {isLoad && isLoading === false ?  <div className="result-search">
                        <div className="display">
                        <img src={githubUser?.avatar_url} alt="Avatar" className="avatar"/>
                                <p className="mini-info">Repositórios públicos: {githubUser?.public_repos}</p>
                                <p className="mini-info">Seguidores: {githubUser?.followers}</p>
                                <p className="mini-info">Seguindo: {githubUser?.following}</p>
                            </div>
                        <div className="card-white">
                          
                            <h6>Informações</h6>
                            <p className="infos infos-first"><span>Empresa: </span>&nbsp;{githubUser?.company}</p>
                            <p className="infos"><span>Website/Blog: </span>&nbsp;{githubUser?.blog}</p>
                            <p className="infos"><span>Localidade: </span>&nbsp;{githubUser?.location}</p>
                            <p className="infos"><span>Membro desde: </span>&nbsp;{githubUser?.created_at}</p>
                        </div>
                        <a href={githubUser?.html_url} target="_new" className="btn-ver">Ver Perfil</a>
                    </div> : (
                        <div>  </div>
                    )}

        </>


    );
}

export default Search;