
export default function handler(req,res){
  const {text} = req.body

  const result = `
RAPPORT SECURIPILOT

Contexte:
${text}

Analyse:
- Situation traitée
- Intervention sécurisée
- Rapport généré automatiquement

Conclusion:
OK
  `
  res.status(200).json({result})
}
