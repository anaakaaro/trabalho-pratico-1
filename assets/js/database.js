if(!localStorage.getItem("projetos")) {
    const projetos = [
            {
                "id": 1,
                "nome": "Casa da Comunidade",
                "descricao": "Apoio comuntário a jovens e adultos na região metropolitana de Belo Horizonte.",
                "local": "Belo Horizonte",
                "pessoas_atendidas": 681,
                "voluntarios": 56,
                "imagens": [
                    {
                        "id": 1,
                        "link": "https://images.unsplash.com/photo-1695938746747-ec185ea81325?q=80&w=870&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
                        "titulo": "Reunião mensal dos participantes"
                    },
                    {
                        "id": 2,
                        "link": "https://images.unsplash.com/photo-1526976668912-1a811878dd37?q=80&w=870&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
                        "titulo": "Festa e oficinas de Carnaval"
                    },
                    {
                        "id": 3,
                        "link": "https://images.unsplash.com/photo-1593113598332-cd288d649433?q=80&w=870&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
                        "titulo": "Entrega de doações para famílias carentes"
                    },
                    {
                        "id": 4,
                        "link": "https://images.unsplash.com/photo-1618521715147-29e4b97e2ebd?q=80&w=704&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
                        "titulo": "Voluntariado: Natureza mais limpa"
                    }
                ],
                "redes_sociais": [
                    {
                        "id": 1,
                        "nome": "WhatsApp",
                        "numero": "5531000000"
                    }
                ]
            },
            {
                "id": 2,
                "nome": "Jogadores em Ação",
                "descricao": "Projeto que tira crianças da rua e as tornam jogadores de futebol.",
                "local": "Belo Horizonte",
                "pessoas_atendidas": 136,
                "voluntarios": 15,
                "imagens": [
                    {
                        "id": 1,
                        "link": "https://images.unsplash.com/photo-1502086223501-7ea6ecd79368?q=80&w=838&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
                        "titulo": "Brincadeiras pós aula"
                    },
                    {
                        "id": 2,
                        "link": "https://images.unsplash.com/photo-1580560230671-61e01dfdb285?w=700&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8Y3JpYW4lQzMlQTdhJTIwZnV0ZWJvbHxlbnwwfHwwfHx8Mg%3D%3D",
                        "titulo": "Futebol comunitário na comunidade Santa Maria"
                    },
                    {
                        "id": 3,
                        "link": "https://images.unsplash.com/photo-1604651684549-962bd68d7c5c?w=700&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8Y3JpYW4lQzMlQTdhJTIwZnV0ZWJvbHxlbnwwfHwwfHx8Mg%3D%3D",
                        "titulo": "2º campeonato municipal do Jogadores em Ação"
                    },
                    {
                        "id": 4,
                        "link": "https://images.unsplash.com/photo-1611812695436-b0da42923bd6?w=700&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTF8fGNyaWFuJUMzJUE3YSUyMGZ1dGVib2x8ZW58MHx8MHx8fDI%3D",
                        "titulo": "Amistoso contra a escola Conceição Brito"
                    }
                ],
                "redes_sociais": [
                    {
                        "id": 1,
                        "nome": "WhatsApp",
                        "numero": "5531555555"
                    }
                ]
            },
            {
                "id": 3,
                "nome": "Mães Amigas",
                "descricao": "Encontro de mães para troca de experiências.",
                "local": "Belo Horizonte",
                "pessoas_atendidas": 1987,
                "voluntarios": 462,
                "imagens": [
                    {
                        "id": 1,
                        "link": "https://images.unsplash.com/photo-1758513359379-a1ccce73b09e?q=80&w=870&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
                        "titulo": "Ensaio de fotos das integrantes do Mães Amigas"
                    },
                    {
                        "id": 2,
                        "link": "https://images.unsplash.com/photo-1607748862156-7c548e7e98f4?q=80&w=387&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
                        "titulo": "Mamães reunidas para arrasar no desfile do projeto"
                    },
                    {
                        "id": 3,
                        "link": "https://images.unsplash.com/photo-1531983412531-1f49a365ffed?q=80&w=870&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
                        "titulo": "Mamãe Amanda compartilha sua primeira experiência com o filho na praia"
                    },
                    {
                        "id": 4,
                        "link": "https://images.unsplash.com/photo-1622352496174-9e1d969b1945?q=80&w=1031&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
                        "titulo": "Reunião mensal do mês 06/2026"
                    }
                ],
                "redes_sociais": [
                    {
                        "id": 1,
                        "nome": "WhatsApp",
                        "numero": "5531555555"
                    }
                ]
            },
            {
                "id": 4,
                "nome": "Biblioteca para Todos",
                "descricao": "Projeto de incentivo à leitura com empréstimo gratuito de livros para crianças e adolescentes.",
                "local": "Betim",
                "pessoas_atendidas": 61,
                "voluntarios": 7,
                "imagens": [
                    {
                        "id": 1,
                        "link": "https://images.unsplash.com/photo-1507842217343-583bb7270b66",
                        "titulo": "Acervo atualizado em Maio/26"
                    },
                    {
                        "id": 2,
                        "link": "https://images.unsplash.com/photo-1525715843408-5c6ec44503b1?w=700&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTN8fGxlaXR1cmF8ZW58MHx8MHx8fDI%3D",
                        "titulo": "Leitora Milena concentrada no encontro semanal"
                    },
                    {
                        "id": 3,
                        "link": "https://images.unsplash.com/photo-1521714161819-15534968fc5f?w=700&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTR8fGxlaXR1cmF8ZW58MHx8MHx8fDI%3D",
                        "titulo": "O homem-aranha convida as crianças para a sessão infantil de Julho/26"
                    },
                    {
                        "id": 4,
                        "link": "https://images.unsplash.com/photo-1573142143200-2a6d95ae7352?w=700&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTV8fGxlaXR1cmF8ZW58MHx8MHx8fDI%3D",
                        "titulo": "Clique da voluntária Geovana desfrutando do nosso poderoso acervo"
                    }
                ],
                "redes_sociais": [
                    {
                        "id": 1,
                        "nome": "WhatsApp",
                        "numero": "553133333333"
                    }
                ]
            },
            {
                "id": 5,
                "nome": "Recicla BH",
                "descricao": "Promove educação ambiental e coleta seletiva em comunidades da região metropolitana.",
                "local": "Belo Horizonte",
                "pessoas_atendidas": 84,
                "voluntarios": 5,
                "imagens": [
                    {
                        "id": 1,
                        "link": "https://images.unsplash.com/photo-1532996122724-e3c354a0b15b",
                        "titulo": "Pintura de lixeiras abondonadas na capital"
                    },
                    {
                        "id": 2,
                        "link": "https://images.unsplash.com/photo-1610093674388-cee0337f2684?w=700&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8cmVjaWNsYWdlbXxlbnwwfHwwfHx8Mg%3D%3D",
                        "titulo": "Coleta de lixos pós folia de carnaval"
                    },
                    {
                        "id": 3,
                        "link": "https://images.unsplash.com/photo-1591193686104-fddba4d0e4d8?w=700&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8cmVjaWNsYWdlbXxlbnwwfHwwfHx8Mg%3D%3D",
                        "titulo": "Entrega de pets para ponto de coleta em São João"
                    },
                    {
                        "id": 4,
                        "link": "https://images.unsplash.com/photo-1561503412-852800622772?w=700&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OXx8cmVjaWNsYWdlbXxlbnwwfHwwfHx8Mg%3D%3D",
                        "titulo": "Resultado do multirão para arrecadar fundos para crianças carentes"
                    }
                ],
                "redes_sociais": [
                    {
                        "id": 1,
                        "nome": "WhatsApp",
                        "numero": "553144444444"
                    }
                ]
            },
            {
                "id": 6,
                "nome": "Música na Praça",
                "local": "Ibirité",
                "descricao": "Oficinas gratuitas de instrumentos musicais para jovens em situação de vulnerabilidade social.",
                "pessoas_atendidas": 300,
                "voluntarios": 19,
                "imagens": [
                    {
                        "id": 1,
                        "link": "https://images.unsplash.com/photo-1511379938547-c1f69419868d",
                        "titulo": "Revitalização de instrumentos"
                    },
                    {
                        "id": 2,
                        "link": "https://images.unsplash.com/photo-1583236753515-7e06aae56395?w=700&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8bSVDMyVCQXNpY2ElMjBydWF8ZW58MHx8MHx8fDI%3D",
                        "titulo": "Oficina de trompete na praça Santa Tereza"
                    },
                    {
                        "id": 3,
                        "link": "https://images.unsplash.com/photo-1651694721718-7a72df522ae3?w=700&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8bSVDMyVCQXNpY2ElMjBydWF8ZW58MHx8MHx8fDI%3D",
                        "titulo": "2ª Mostra de talentos na praça Ouro Preto"
                    },
                    {
                        "id": 4,
                        "link": "https://images.unsplash.com/photo-1720455730407-e59f735d1a91?w=700&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8bSVDMyVCQXNpY2ElMjBydWF8ZW58MHx8MHx8fDI%3D",
                        "titulo": "1ª Mostra de talentos na praça Ouro Preto"
                    }
                ],
                "redes_sociais": [
                    {
                        "id": 1,
                        "nome": "WhatsApp",
                        "numero": "553155555556"
                    }
                ]
            },
            {
                "id": 7,
                "nome": "Horta Comunitária Verde Vida",
                "descricao": "Cultivo coletivo de hortaliças para abastecer famílias em situação de vulnerabilidade.",
                "local": "Belo Horizonte",
                "pessoas_atendidas": 670,
                "voluntarios": 20,
                "imagens": [
                    {
                        "id": 1,
                        "link": "https://images.unsplash.com/photo-1466692476868-aef1dfb1e735",
                        "titulo": "Evolução do plantio comunitário do mês de Junho/26"
                    },
                    {
                        "id": 2,
                        "link": "https://images.unsplash.com/photo-1563714193017-5a5fb60bc02b?w=700&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OXx8aG9ydGF8ZW58MHx8MHx8fDI%3D",
                        "titulo": "Revitalização do nosso jardim comunitário"
                    },
                    {
                        "id": 3,
                        "link": "https://images.unsplash.com/photo-1515150144380-bca9f1650ed9?w=700&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTJ8fGhvcnRhfGVufDB8fDB8fHwy",
                        "titulo": "Clique do plantio comunitário do mês de Junho/26"
                    },
                    {
                        "id": 4,
                        "link": "https://images.unsplash.com/photo-1611843467160-25afb8df1074?w=700&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTl8fGhvcnRhfGVufDB8fDB8fHwy",
                        "titulo": "Mão na Obra: nossos voluntários cuidando da nossa horta"
                    }
                ],
                "redes_sociais": [
                    {
                        "id": 1,
                        "nome": "WhatsApp",
                        "numero": "553188888888"
                    }
                ]
            },
            {
                "id": 8,
                "nome": "Programadores do Futuro",
                "descricao": "Cursos gratuitos de programação e tecnologia para estudantes do ensino médio.",
                "local": "Belo Horizonte",
                "pessoas_atendidas": 1600,
                "voluntarios": 30,
                "imagens": [
                    {
                        "id": 1,
                        "link": "https://images.unsplash.com/photo-1515879218367-8466d910aaa4",
                        "titulo": "Código vencedor da nossa 1ª competição mirim"
                    },
                    {
                        "id": 2,
                        "link": "https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=700&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8cHJvZ3JhbWElQzMlQTclQzMlQTNvfGVufDB8fDB8fHwy",
                        "titulo": "O aluno fernando mostra que a constância de estudos também é importantes"
                    },
                    {
                        "id": 3,
                        "link": "https://images.unsplash.com/photo-1550439062-609e1531270e?w=700&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTR8fHByb2dyYW1hJUMzJUE3JUMzJUEzb3xlbnwwfHwwfHx8Mg%3D%3D",
                        "titulo": "Professor Thiago prepara os materiais para aulão comunitário"
                    },
                    {
                        "id": 4,
                        "link": "https://images.unsplash.com/photo-1629904853716-f0bc54eea481?w=700&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjR8fHByb2dyYW1hJUMzJUE3JUMzJUEzb3xlbnwwfHwwfHx8Mg%3D%3D",
                        "titulo": "Nossos voluntários prontos para sanar as dúvidas dos alunos"
                    }
                ],
                "redes_sociais": [
                    {
                        "id": 1,
                        "nome": "WhatsApp",
                        "numero": "553199999999"
                    }
                ]
            }
        ];

    localStorage.setItem("projetos", JSON.stringify(projetos));
}

if(!localStorage.getItem("usuarios")) {
    const usuarios = [
            {id: 1, nome: "Ana Carolina", login: "ana", senha: "ana123", email: "ana@gmail.com", admin: true, favoritos: []},
            {id: 2, nome: "Maria Clara", login: "maria", senha: "maria123", email: "maria@gmail.com", admin: false, favoritos: []}
        ];

    localStorage.setItem("usuarios", JSON.stringify(usuarios));
}