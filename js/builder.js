function buildHTML(result)
{
	var container = document.createElement('div');
	container.className = 'container';

	var content = document.createElement('div');
	content.className = 'content';

	var bt = document.createElement('div');
	bt.className = 'blog-title';

	var h2 = document.createElement('h2');
	var title = document.createElement('a');
	title.id = 'title';

	var resultTitle = result.title;
	if(resultTitle.startsWith("Sex"))
	{
	resultTitle = "Nudity";
	}
	title.innerHTML = resultTitle;

	var overallVote = document.createElement('a');
	overallVote.id = 'overall-vote';
	overallVote.innerHTML = result.overallVote;

	h2.appendChild(title);
	h2.appendChild(overallVote);

	var overallStatus = result.overallStatus;
	var status = document.createElement('div');
	status.id = 'status';
	status.innerHTML = overallStatus;

	if(overallStatus === 'NONE')
	status.className = 'status green'; //need to set colour
	else if(overallStatus === 'MILD')
	status.className = 'status yellow'; //need to set colour
	else if(overallStatus === 'MODERATE')
	status.className = 'status orange'; //need to set colour
	else if(overallStatus === 'SEVERE')
	status.className = 'status red'; //need to set colour

	bt.appendChild(h2);
	bt.appendChild(status);

	content.appendChild(bt);

	var comments = document.createElement('div');
	comments.className = 'comments';
	comments.id = 'comments';
	for (var comment of result.comments) 
	{
	var pElem = document.createElement('p');
	pElem.innerHTML = comment;

	comments.appendChild(pElem);

	var seperator = document.createElement('div');
	seperator.className = "seperator";
	comments.appendChild(seperator);
	}

	// console.log(comments);
	content.appendChild(comments);


	var votesContainer = document.createElement('div');
	votesContainer.className = 'seperator votes-container';

	var votes = document.createElement('div');
	votes.className = 'votes';
	votes.id = 'votes';

	var ul = document.createElement('ul');

	var none = result.votesByStatusType.NONE;
	var mild = result.votesByStatusType.MILD;
	var moderate = result.votesByStatusType.MODERATE;
	var severe = result.votesByStatusType.SEVERE;

	var li = document.createElement('li');
	var p = document.createElement('a');
	p.innerHTML = "NONE - " + none;
	p.className = "green"
	li.appendChild(p);
	ul.appendChild(li);

	var li1 = document.createElement('li');
	var p1 = document.createElement('a');
	p1.innerHTML = "MILD - " + mild;
	p1.className = "yellow"
	li1.appendChild(p1);
	ul.appendChild(li1);

	var li2 = document.createElement('li');
	var p2 = document.createElement('a');
	p2.innerHTML = "MODERATE - " + moderate;
	p2.className = "orange"
	li2.appendChild(p2);
	ul.appendChild(li2);

	var li3 = document.createElement('li');
	var p3 = document.createElement('a');
	p3.innerHTML = "SEVERE - " + severe;
	p3.className = "red"
	li3.appendChild(p3);
	ul.appendChild(li3);

	votes.appendChild(ul);
	votesContainer.appendChild(votes);

	content.appendChild(votesContainer);
	container.appendChild(content);

	return container;
} 