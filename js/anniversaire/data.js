export const anniversaire = {
    question: "Est ce un anniversaire féminin ou masculin",
    choices: {
        1: "Féminin",
        2: "Masculin",
    },
    masculin:{
        question: "Il a quel age notre champion?",
        choices: {
            1: "bebe",
            2: "5_9 ans",
            3: "préadolescent",
            4: "adolescent",
            5: "18_21 ans",
            6: "22_25 ans",
        },
        bebe: {
            comment: "Si tu es proche des parents, pense à eux ! Pose toi la question: 'De quoi ont-ils besoin pour s'occuper de leur ptit bout'chou ?'",
            question: "Quel genre de liste de cadeaux souhaiterai tu découvrir ?",
            choices: {
                1: "Marrant et original",
                2: "Utile pour les parents",
                3: "Important pour le long terme"
            },
            marrant_et_original: {
                goal: {
                    1: "La tétine vraiment marrante",
                    2: "Le bébé serpillaire",
                    3: "Le protège urine",
                    4: "Le bloque urine",
                    5: "La perruque",
                    6: "Les moufles pour poussette",
                    7: "Le ventilateur pour cul",
                    8: "Le chauffe lingette électrique"
                }    
            },
        }
    },
    feminin:{
        18: ""
    },
}