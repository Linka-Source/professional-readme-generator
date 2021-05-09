const template = function(answers)
{
    console.log(answers);
    const temp = `# ${answers.projectTitle}`
    const temp = `# ${answers.description}`
    return temp;
}

module.exports = template