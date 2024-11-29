$(`.emoji-ul>li>ul>li>ul`).addClass(`code`);
$(`.emoji-ul>li>ul>li`).each(function () {

    const f = $(this)
        .contents()
        .filter(function () { return this.nodeType === 3; })
        .first();
    const t = f.text();
    f.replaceWith(`<span>${t}</span> `);

})

$(`.code>li`).each(function () {
    const m_ = $(this).text().trim().replaceAll(` `, `;&#x`);
    const m = `&#x${m_};`;
    $(this).html(m);
})
