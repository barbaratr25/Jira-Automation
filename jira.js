const username = 'seu_usuario';
const password = 'sua_senha';
const jiraUrl = 'https://seu-dominio.atlassian.net/rest/api/2/issue/';

const createJiraTask = (summary, description, projectKey, issueType) => {
  const authHeader = `Basic ${btoa(`${username}:${password}`)}`;

  const data = {
    fields: {
      project: {
        key: projectKey,
      },
      summary: summary,
      description: description,
      issuetype: {
        name: issueType,
      },
    },
  };

  fetch(jiraUrl, {
    method: 'POST',
    headers: {
      Authorization: authHeader,
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(data),
  })
    .then(response => response.json())
    .then(result => {
      console.log('Tarefa criada com sucesso! ID:', result.id);
    })
    .catch(error => {
      console.error('Erro ao criar tarefa:', error);
    });
};

const taskSummary = 'Nova tarefa';
const taskDescription = 'Descrição da nova tarefa';
const projectKey = 'KEY'; // Substitua pelo código do projeto Jira
const issueType = 'Task'; // Substitua pelo tipo de tarefa desejado

createJiraTask(taskSummary, taskDescription, projectKey, issueType);
