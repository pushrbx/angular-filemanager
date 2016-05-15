(function(angular) {
    'use strict';
    angular.module('FileManagerApp').provider('fileManagerConfig', function() {

        var values = {
            appName: 'storage-chan file manager',
            defaultLang: 'en',

            listUrl: 'blob/list',
            uploadUrl: 'blob/upload',
            renameUrl: 'blob/rename',
            copyUrl: 'blob/copy',
            moveUrl: 'blob/move',
            removeUrl: 'blob/delete',
            editUrl: 'blob/edit',
            getContentUrl: 'blob/get-content',
            createFolderUrl: 'blob/create-folder',
            downloadFileUrl: 'blob/download',
            downloadMultipleUrl: 'blob/download-multiple',
            compressUrl: 'blob/compress',
            extractUrl: 'blob/extract',
            permissionsUrl: 'blob/set-permissions',
            getLinkOfFile: 'blob/get-file-link',

            searchForm: true,
            sidebar: true,
            breadcrumb: true,
            allowedActions: {
                upload: true,
                rename: false,
                move: true,
                copy: true,
                edit: false,
                changePermissions: false,
                compress: false,
                compressChooseName: false,
                extract: false,
                download: true,
                downloadMultiple: false,
                preview: false,
                remove: true,
                getDownloadLink: true
            },

            multipleDownloadFileName: 'angular-filemanager.zip',
            showSizeForDirectories: false,
            useBinarySizePrefixes: false,
            downloadFilesByAjax: false,
            previewImagesInModal: true,
            enablePermissionsRecursive: true,
            compressAsync: false,
            extractAsync: false,

            isEditableFilePattern: /\.(txt|diff?|patch|svg|asc|cnf|cfg|conf|html?|.html|cfm|cgi|aspx?|ini|pl|py|md|css|cs|js|jsp|log|htaccess|htpasswd|gitignore|gitattributes|env|json|atom|eml|rss|markdown|sql|xml|xslt?|sh|rb|as|bat|cmd|cob|for|ftn|frm|frx|inc|lisp|scm|coffee|php[3-6]?|java|c|cbl|go|h|scala|vb|tmpl|lock|go|yml|yaml|tsv|lst)$/i,
            isImageFilePattern: /\.(jpe?g|gif|bmp|png|svg|tiff?)$/i,
            isExtractableFilePattern: /\.(gz|tar|rar|g?zip)$/i,
            tplPath: 'src/templates'
        };

        return {
            $get: function() {
                return values;
            },
            set: function (constants) {
                angular.extend(values, constants);
            }
        };

    });
})(angular);
