const template = function(answers)
{
    console.log(answers);
    const temp = `# ${answers.projectTitle}`
    return temp;
}

module.exports = template

// + answers.description + answers.installation + answers.usage + answers.license + answers.contribution + answers.github + answers.email