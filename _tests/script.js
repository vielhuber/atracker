const cc = new window.chefcookie({
    'message': '\
        <h2>Wir verwenden Cookies</h2>\
        <p>\
            Unsere Website verwendet Cookies, die uns helfen, unsere Website zu verbessern, den bestmöglichen Service zu bieten und ein optimales Kundenerlebnis zu ermöglichen. Hier können Sie Ihre Einstellungen verwalten. Indem Sie auf "Akzeptieren" klicken, erklären Sie sich damit einverstanden, dass Ihre Cookies für diesen Zweck verwendet werden. <a href="https://tld.com/privacy">Mehr erfahren</a>\
        </p>\
    ',
    'color': '#e4042d',
    'labels': {
        'decline': 'Ablehnen',
        'settings_open': 'Meine Einstellungen verwalten',
        'settings_close': 'Einstellungen schließen',
        'accept': 'Akzeptieren',
        'confirm': 'Bestätigen'
    },
    'exclude': [
        'https://tld.com/privacy',
        function() { return ( document.cookie !== undefined && document.cookie.indexOf('wp-settings-time') > -1 ); }
    ],
    'settings': [
        {
            'title': 'Analysen',
            'description': 'Tools, die anonyme Daten über Website-Nutzung und -Funktionalität sammeln. Wir nutzen die Erkenntnisse, um unsere Produkte, Dienstleistungen und das Benutzererlebnis zu verbessern.',
            'active': false,
            'hidden': false,
            'trackers': {
                'google': 'UA-77674501-1',
            }
        },
        {
            'title': 'Werbung',
            'description': 'Anonyme Informationen, die wir sammeln, um Ihnen nützliche Produkte und Dienstleistungen empfehlen zu können.',
            'active': false,
            'hidden': false,
            'trackers': {
                'facebook': '687761448085259',
                'twitter': 'single',
                'taboola': 'taboolaaccount-socialclose2de',
                'match2one': '11538693',
                'smartlook': 'e63141d523562364440934be8a0d418f17f5123b'
            }
        },
        {
            'title': 'Support',
            'description': 'Tools, die interaktive Services wie Chat-Support und Kunden-Feedback-Tools unterstützen.',
            'active': false,
            'hidden': false,
            /*
            'trackers': {
                'custom': function()
                {
                    document.head.insertAdjacentHTML('beforeend',`
                        <script src="custom.js"></script> 
                    `);
                },
            }
            */
        },
        {
            'title': 'Grundlegendes',
            'description': 'Tools, die wesentliche Services und Funktionen ermöglichen, einschließlich Identitätsprüfung, Servicekontinuität und Standortsicherheit. Diese Option kann nicht abgelehnt werden.',
            'active': true,
            'hidden': true,
            'trackers': {}
        },
    ]    
});

window.addEventListener('load', function(e)
{
    // track duration
    cc.trackDuration();
    // track scroll depth
    cc.trackScrollDepth();
    // custom tracking
    document.querySelector('.conversion').addEventListener('click', function(e)
    { 
        cc.eventGoogle('custom_category','custom_action');
        cc.eventFacebook('custom_action_name');
        cc.eventTwitter('conversion_id');
        cc.eventTaboola('custom_action_name');
        cc.eventMatch2one('id=xxxxxx&seg=xxxxxx');
        e.preventDefault();
    });
});